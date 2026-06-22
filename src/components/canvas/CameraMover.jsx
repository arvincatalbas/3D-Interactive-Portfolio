import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
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
  }
};

export function CameraMover() {
  const { camera } = useThree();
  const location = useLocation();
  const currentRoute = location.pathname;

  const config = routeConfigs[currentRoute] || routeConfigs['/'];

  const targetPosition = useRef(new THREE.Vector3(...config.position));
  const targetLookAt = useRef(new THREE.Vector3(...config.target));
  const currentLookAt = useRef(new THREE.Vector3(...routeConfigs['/'].target));

  useEffect(() => {
    targetPosition.current.set(...config.position);
    targetLookAt.current.set(...config.target);
    
    // Smoothly adjust FOV (dampening could be applied, but standard update is fine)
    camera.fov = config.fov;
    camera.updateProjectionMatrix();
  }, [currentRoute, camera, config]);

  useFrame((state, delta) => {
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
