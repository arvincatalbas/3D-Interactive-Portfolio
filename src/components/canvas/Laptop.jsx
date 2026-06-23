import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Html } from '@react-three/drei';

export function Laptop({ theme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  
  const isFocused = location.pathname === '/projects';

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/projects');
  };

  return (
    <group
      position={[0, 1.02, -0.2]}
      rotation={[0, 0, 0]}
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
      {/* LAPTOP BASE */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.1, 0.03, 0.75]} />
        <meshStandardMaterial color={hovered ? "#4a4e69" : "#2a2d34"} roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* KEYBOARD / TRACKPAD AREA */}
      <mesh position={[0, 0.018, 0.08]} castShadow>
        <boxGeometry args={[0.9, 0.005, 0.35]} />
        <meshStandardMaterial color="#1a1c20" roughness={0.6} />
      </mesh>
      
      {/* HINGE */}
      <mesh position={[0, 0.015, -0.36]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.9, 16]} />
        <meshStandardMaterial color="#1a1c20" roughness={0.4} metalness={0.9} />
      </mesh>

      {/* LAPTOP LID / SCREEN (Rotated backward slightly) */}
      <group position={[0, 0.015, -0.37]} rotation={[-0.2, 0, 0]}>
        {/* Lid Backing */}
        <mesh position={[0, 0.38, 0]} castShadow>
          <boxGeometry args={[1.1, 0.76, 0.025]} />
          <meshStandardMaterial color={hovered ? "#4a4e69" : "#2a2d34"} roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Screen Bezel */}
        <mesh position={[0, 0.38, 0.01]} castShadow>
          <boxGeometry args={[1.04, 0.7, 0.01]} />
          <meshStandardMaterial color="#0e0f11" roughness={0.8} />
        </mesh>

        {/* Glow emission plate under screen */}
        <mesh position={[0, 0.38, 0.012]}>
          <planeGeometry args={[1.0, 0.66]} />
          <meshBasicMaterial color={theme?.colors?.primary || "#00ffb7"} opacity={0.03} transparent />
        </mesh>

        {/* Interactive Screen HTML */}
        <Html
          transform
          distanceFactor={0.78}
          position={[0, 0.38, 0.016]}
          rotation={[0, 0, 0]}
          occlude
        >
          <div className={`laptop-screen-content ${isFocused ? 'focused' : ''}`}>
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">arvin@3d-portfolio: ~/projects</span>
            </div>
            <div className="terminal-body">
              <p className="prompt"><span className="usr">arvincatalbas</span>@<span className="host">portfolio</span>:~$ npm run dev</p>
              <p className="sys-log">&gt; 3d-portfolio@1.0.0 dev</p>
              <p className="sys-log">&gt; vite --host</p>
              <p className="sys-success">✔ Server running at http://localhost:5173</p>
              <p className="sys-log">  ready in 482 ms</p>
              
              <div className="ide-code-block">
                <span className="kw">const</span> <span className="var">developer</span> = &#123;
                <br/>
                &nbsp;&nbsp;name: <span className="str">"Arvin"</span>,
                <br/>
                &nbsp;&nbsp;title: <span className="str">"Full-Stack 3D Dev"</span>,
                <br/>
                &nbsp;&nbsp;skills: [<span className="str">"React"</span>, <span className="str">"ThreeJS"</span>, <span className="str">"Node"</span>],
                <br/>
                &nbsp;&nbsp;status: <span className="str">"Open to Work"</span>
                <br/>
                &#125;;
              </div>
              <p className="pulse-cursor">_</p>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}
