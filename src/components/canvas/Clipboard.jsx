import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Clipboard() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/resume');
  };

  return (
    <group
      position={[-0.7, 1.05, 0.2]}
      rotation={[0, 0.2, 0]}
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
      {/* WOODEN BOARD */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.35, 0.015, 0.5]} />
        <meshStandardMaterial color={hovered ? "#b88a5c" : "#8c6239"} roughness={0.7} />
      </mesh>

      {/* PAPER SHEET */}
      <mesh position={[0, 0.01, 0.02]} receiveShadow>
        <boxGeometry args={[0.3, 0.005, 0.44]} />
        <meshStandardMaterial color="#f7fafc" roughness={0.9} />
      </mesh>

      {/* PAPER GRAPHICS (Simulating text blocks on resume) */}
      <group position={[0, 0.014, 0.02]}>
        {/* Profile image square */}
        <mesh position={[-0.09, 0, 0.14]}>
          <planeGeometry args={[0.06, 0.06]} />
          <meshBasicMaterial color="#a0aec0" />
        </mesh>
        
        {/* Name lines */}
        <mesh position={[0.03, 0, 0.16]}>
          <planeGeometry args={[0.14, 0.015]} />
          <meshBasicMaterial color="#2d3748" />
        </mesh>
        <mesh position={[0.03, 0, 0.13]}>
          <planeGeometry args={[0.14, 0.008]} />
          <meshBasicMaterial color="#4a5568" />
        </mesh>

        {/* Separator line */}
        <mesh position={[0, 0, 0.09]}>
          <planeGeometry args={[0.26, 0.004]} />
          <meshBasicMaterial color="#cbd5e0" />
        </mesh>

        {/* Bullet text simulation */}
        {[-0.04, -0.09, -0.14].map((zPos, idx) => (
          <group key={idx} position={[0, 0, zPos + 0.09]}>
            <mesh position={[-0.11, 0, 0]}>
              <circleGeometry args={[0.006, 8]} />
              <meshBasicMaterial color="#3182ce" />
            </mesh>
            <mesh position={[0.01, 0, 0]}>
              <planeGeometry args={[0.2, 0.01]} />
              <meshBasicMaterial color="#718096" />
            </mesh>
            <mesh position={[-0.02, 0, -0.015]}>
              <planeGeometry args={[0.14, 0.008]} />
              <meshBasicMaterial color="#a0aec0" />
            </mesh>
          </group>
        ))}
      </group>

      {/* METALLIC CLIP */}
      <mesh position={[0, 0.018, -0.21]} castShadow>
        <boxGeometry args={[0.16, 0.02, 0.05]} />
        <meshStandardMaterial color="#cbd5e0" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* HOVER GLOW RING */}
      {hovered && (
        <mesh position={[0, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.28, 0.3, 32]} />
          <meshBasicMaterial color="#ffa64d" opacity={0.6} transparent />
        </mesh>
      )}
    </group>
  );
}
