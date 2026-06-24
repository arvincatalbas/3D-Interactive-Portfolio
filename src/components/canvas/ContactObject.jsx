import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Html } from '@react-three/drei';

export function ContactObject({ theme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const isFocused = location.pathname === '/contact';

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/contact');
  };

  const primaryColor = theme?.colors?.primary || '#00ffcc';

  return (
    <group
      position={[-0.38, 1.03, 0.24]}
      rotation={[0, 0.15, 0]}
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
      {/* SMARTPHONE BODY / CASE */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.012, 0.18]} />
        <meshStandardMaterial 
          color={hovered ? '#3b4252' : '#1e222b'} 
          roughness={0.4} 
          metalness={0.8} 
        />
      </mesh>

      {/* GLOWING SCREEN BACKPLATE */}
      <mesh position={[0, 0.006, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.09, 0.17]} />
        <meshStandardMaterial 
          color="#0b0d10" 
          roughness={0.1} 
          emissive={primaryColor} 
          emissiveIntensity={hovered ? 0.35 : 0.1} 
        />
      </mesh>

      {/* HTML PHONE INTERFACE */}
      <Html
        transform
        distanceFactor={0.15}
        position={[0, 0.007, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        occlude
      >
        <div className={`phone-screen-content ${isFocused ? 'focused' : ''}`}>
          <div className="phone-header">
            <span className="time">11:00 AM</span>
            <div className="icons">
              <span className="network">📶</span>
              <span className="battery">🔋</span>
            </div>
          </div>
          <div className="phone-body">
            <div className="message-app">
              <div className="chat-bubble received">
                <span className="sender">Colleague</span>
                <p>Hey Arvin, got a minute to chat?</p>
              </div>
              <div className="chat-bubble received highlight-bubble">
                <span className="sender">Client</span>
                <p>New project offer incoming! Click to view details.</p>
                <div className="pulse-dot"></div>
              </div>
            </div>
            <div className="phone-nav-hint">
              Tap Screen to Reply
            </div>
          </div>
        </div>
      </Html>

      {/* HOVER GLOW RING */}
      {hovered && (
        <mesh position={[0, -0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.11, 0.12, 32]} />
          <meshBasicMaterial color={primaryColor} opacity={0.6} transparent />
        </mesh>
      )}

      {/* LIGHT EMISSION UNDER PHONE WHEN HOVERED */}
      <pointLight
        position={[0, 0.05, 0]}
        color={primaryColor}
        intensity={hovered ? 0.6 : 0.1}
        distance={0.8}
        decay={2}
      />
    </group>
  );
}

export default ContactObject;
