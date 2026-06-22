import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Html } from '@react-three/drei';

export function Terminal() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  
  const isFocused = location.pathname === '/github';

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/github');
  };

  return (
    <group
      position={[0.8, 1.04, -0.35]}
      rotation={[0, -0.4, 0]}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* CRT MONITOR BASE STAND */}
      <mesh castShadow receiveShadow position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.1, 16]} />
        <meshStandardMaterial color="#3a3e45" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* MONITOR NECK */}
      <mesh castShadow position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
        <meshStandardMaterial color="#22252a" roughness={0.4} />
      </mesh>

      {/* CRT BULKY SHELL */}
      <mesh castShadow position={[0, 0.35, 0.02]}>
        <boxGeometry args={[0.6, 0.44, 0.48]} />
        <meshStandardMaterial color={hovered ? "#4b5059" : "#31353c"} roughness={0.4} metalness={0.6} />
      </mesh>

      {/* SCREEN BEZEL INNER */}
      <mesh position={[0, 0.35, 0.252]}>
        <boxGeometry args={[0.54, 0.38, 0.02]} />
        <meshStandardMaterial color="#1a1c20" roughness={0.7} />
      </mesh>

      {/* SCREEN TINT (Greenish glass) */}
      <mesh position={[0, 0.35, 0.262]}>
        <planeGeometry args={[0.5, 0.34]} />
        <meshStandardMaterial color="#0f2615" roughness={0.1} emissive="#00ff66" emissiveIntensity={hovered ? 0.25 : 0.1} />
      </mesh>

      {/* Hologram Terminal Interface */}
      <Html
        transform
        distanceFactor={0.45}
        position={[0, 0.35, 0.268]}
        rotation={[0, 0, 0]}
        occlude
      >
        <div className={`crt-terminal-screen ${isFocused ? 'focused' : ''}`}>
          <div className="terminal-glow"></div>
          <div className="crt-header">
            <span className="crt-indicator active"></span>
            <span className="crt-title">GIBSON-OS v3.8</span>
          </div>
          <div className="crt-body">
            <p className="cmd">&gt; curl -s https://api.github.com/users/arvincatalbas</p>
            <p className="res">HTTP/1.1 200 OK</p>
            <p className="res">User: arvincatalbas</p>
            <p className="res">Repos: 24 | Gists: 3</p>
            <p className="res">Followers: 142</p>
            <p className="cmd">&gt; fetch --pinned</p>
            <div className="crt-repos">
              <span className="repo-tag">[1] 3d-interactive-room</span>
              <span className="repo-tag">[2] react-three-game</span>
            </div>
            <p className="scanline-text">SYSTEM SECURE. CLICK TO DETACH.</p>
          </div>
        </div>
      </Html>

      {/* EMISSION LAMP SHADOW */}
      <pointLight
        position={[0, 0.35, 0.4]}
        color="#39ff14"
        intensity={hovered ? 0.8 : 0.3}
        distance={2}
        decay={2}
      />
    </group>
  );
}
