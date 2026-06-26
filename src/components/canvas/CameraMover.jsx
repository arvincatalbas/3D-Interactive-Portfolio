import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';

const routeConfigs = {
  '/': {
    position: [6, 5.5, 6],
    target: [0, 0.8, 0],
    fov: 40
  },
  '/projects': {
    position: [0, 1.7, 1.8],
    target: [0, 1.25, -0.5],
    fov: 35
  },
  '/certificates': {
    position: [-1.8, 2.3, 2.2],
    target: [-3.8, 2.3, 0],
    fov: 35
  },
  '/resume': {
    position: [-0.7, 1.8, 1.1],
    target: [-0.7, 1.1, 0.2],
    fov: 30
  },
  '/github': {
    position: [1.3, 1.7, 1.4],
    target: [1.7, 1.25, 0.1],
    fov: 30
  },
  '/tools': {
    position: [1.2, 1.6, 0.8],
    target: [1.2, 1.1, -1.1],
    fov: 32
  },
  '/contact': {
    position: [-0.38, 1.5, 0.8],
    target: [-0.38, 1.0, 0.24],
    fov: 30
  }
};

export function CameraMover() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const config = routeConfigs[currentRoute] || routeConfigs['/'];

  const targetPosition = useRef(new THREE.Vector3(...config.position));
  const targetLookAt = useRef(new THREE.Vector3(...config.target));
  const currentLookAt = useRef(new THREE.Vector3(...routeConfigs['/'].target));

  useEffect(() => {
    targetPosition.current.set(...config.position);
    targetLookAt.current.set(...config.target);
  }, [config]);

  useFrame((state, delta) => {
    const { camera, size } = state;

    // Smoothly adjust FOV based on screen size / portrait aspect ratio
    const isMobile = size.width < 768 || size.width < size.height;
    const targetFov = config.fov + (isMobile ? 12 : 0);
    if (camera.fov !== targetFov) {
      camera.fov = targetFov;
      camera.updateProjectionMatrix();
    }

    // Clamp delta to avoid massive jumps when tab loses focus
    const clampDelta = Math.min(delta, 0.1);
    
    // Lerp position
    camera.position.lerp(targetPosition.current, clampDelta * 4);

    // Lerp lookAt vector
    currentLookAt.current.lerp(targetLookAt.current, clampDelta * 4);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
