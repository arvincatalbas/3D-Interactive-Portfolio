import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function WallFrames() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const frames = [
    {
      id: 1,
      title: 'Advanced React',
      issuer: 'Meta / Coursera',
      position: [-2.95, 2.3, -0.7],
      rotation: [0, Math.PI / 2, 0],
      color: '#00e5ff'
    },
    {
      id: 2,
      title: 'Three.js Journey',
      issuer: 'Bruno Simon',
      position: [-2.95, 2.3, 0.7],
      rotation: [0, Math.PI / 2, 0],
      color: '#ff007f'
    }
  ];

  return (
    <group>
      {frames.map((frame, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <group
            key={frame.id}
            position={frame.position}
            rotation={frame.rotation}
            onClick={(e) => {
              e.stopPropagation();
              navigate('/certificates');
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredIndex(index);
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHoveredIndex(null);
              document.body.style.cursor = 'auto';
            }}
          >
            {/* FRAME BACKING / BORDER */}
            <mesh castShadow>
              <boxGeometry args={[1.1, 0.8, 0.04]} />
              <meshStandardMaterial
                color={isHovered ? frame.color : "#22252a"}
                roughness={0.2}
                metalness={0.7}
                emissive={isHovered ? frame.color : "#000000"}
                emissiveIntensity={isHovered ? 0.4 : 0}
              />
            </mesh>

            {/* ARTWORK / CERTIFICATE SHEET */}
            <mesh position={[0, 0, 0.022]}>
              <planeGeometry args={[1.0, 0.7]} />
              <meshStandardMaterial color="#0f1115" roughness={0.9} />
            </mesh>

            {/* DECORATIVE CERTIFICATE INNER GRAPHIC */}
            <group position={[0, 0, 0.024]}>
              {/* Gold badge */}
              <mesh position={[-0.35, -0.15, 0]}>
                <ringGeometry args={[0.04, 0.06, 32]} />
                <meshBasicMaterial color="#ffd700" />
              </mesh>
              <mesh position={[-0.35, -0.15, -0.001]}>
                <circleGeometry args={[0.04, 32]} />
                <meshBasicMaterial color="#ffd700" />
              </mesh>
              
              {/* Text simulation blocks */}
              <mesh position={[0.1, 0.2, 0]}>
                <planeGeometry args={[0.6, 0.03]} />
                <meshBasicMaterial color="#ffffff" opacity={0.8} transparent />
              </mesh>
              <mesh position={[0.1, 0.1, 0]}>
                <planeGeometry args={[0.7, 0.02]} />
                <meshBasicMaterial color="#a0aec0" opacity={0.6} transparent />
              </mesh>
              <mesh position={[0.1, 0.02, 0]}>
                <planeGeometry args={[0.5, 0.02]} />
                <meshBasicMaterial color="#a0aec0" opacity={0.6} transparent />
              </mesh>
              <mesh position={[0.1, -0.06, 0]}>
                <planeGeometry args={[0.3, 0.04]} />
                <meshBasicMaterial color={frame.color} opacity={0.9} transparent />
              </mesh>
              
              {/* Thin border inside the card */}
              <mesh position={[0, 0, 0.001]}>
                <ringGeometry args={[0.48, 0.49, 4, 1, Math.PI / 4]} />
                <meshBasicMaterial color={isHovered ? frame.color : "#4a5568"} opacity={0.5} transparent />
              </mesh>
            </group>

            {/* GLOWING SPOTLIGHT AURA (behind frame when hovered) */}
            {isHovered && (
              <pointLight
                position={[0, 0, -0.15]}
                color={frame.color}
                intensity={1.5}
                distance={1.5}
                decay={2}
              />
            )}
          </group>
        );
      })}
    </group>
  );
}
