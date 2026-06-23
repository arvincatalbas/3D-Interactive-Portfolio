import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Bookshelf() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  
  const shelfColor = hovered ? '#3e342c' : '#2d251e';

  const handleClick = (e) => {
    e.stopPropagation();
    navigate('/skills');
  };

  // Helper to generate a book mesh
  const Book = ({ width = 0.06, height = 0.3, depth = 0.22, color = '#ff3366', pos, rot = [0, 0, 0] }) => (
    <mesh position={pos} rotation={rot} castShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} roughness={0.6} />
    </mesh>
  );

  return (
    <group 
      position={[1.2, 0, -1.1]}
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
      {/* VERTICAL BACK BOARD */}
      <mesh castShadow receiveShadow position={[0, 1.1, -0.15]}>
        <boxGeometry args={[0.7, 2.2, 0.04]} />
        <meshStandardMaterial color={shelfColor} roughness={0.8} />
      </mesh>

      {/* LEFT SIDE PANEL */}
      <mesh castShadow receiveShadow position={[-0.33, 1.1, 0]}>
        <boxGeometry args={[0.04, 2.2, 0.34]} />
        <meshStandardMaterial color={shelfColor} roughness={0.8} />
      </mesh>

      {/* RIGHT SIDE PANEL */}
      <mesh castShadow receiveShadow position={[0.33, 1.1, 0]}>
        <boxGeometry args={[0.04, 2.2, 0.34]} />
        <meshStandardMaterial color={shelfColor} roughness={0.8} />
      </mesh>

      {/* HORIZONTAL SHELVES */}
      {[0.1, 0.65, 1.2, 1.75, 2.15].map((yPos, idx) => (
        <mesh key={idx} position={[0, yPos, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.62, 0.03, 0.32]} />
          <meshStandardMaterial color={shelfColor} roughness={0.8} />
        </mesh>
      ))}

      {/* BOOKS - SHELF 1 (Y = 0.1) */}
      <Book color="#3182ce" pos={[-0.2, 0.25, 0]} />
      <Book color="#dd6b20" pos={[-0.13, 0.25, 0]} />
      <Book color="#38a169" pos={[-0.06, 0.27, -0.01]} height={0.34} />
      <Book color="#e53e3e" pos={[0.01, 0.25, 0.01]} />
      <Book color="#805ad5" pos={[0.08, 0.22, 0.01]} height={0.24} rot={[0, 0, -0.2]} />
      <Book color="#d69e2e" pos={[0.16, 0.21, 0.02]} height={0.25} rot={[0, 0, -0.25]} />

      {/* BOOKS - SHELF 2 (Y = 0.655) */}
      <Book color="#e53e3e" pos={[-0.22, 0.8, -0.02]} height={0.26} />
      <Book color="#3182ce" pos={[-0.16, 0.8, 0]} height={0.28} />
      <Book color="#4a5568" pos={[-0.1, 0.8, 0]} height={0.28} />
      <Book color="#cbd5e0" pos={[0.1, 0.77, 0]} width={0.22} height={0.06} depth={0.25} />
      <Book color="#4a5568" pos={[0.1, 0.84, 0]} width={0.2} height={0.06} depth={0.24} />

      {/* DECORATION - SHELF 3 (Y = 1.2) */}
      {/* Glowing trophy sphere */}
      <group position={[0, 1.35, 0]}>
        <mesh castShadow position={[0, -0.08, 0]}>
          <cylinderGeometry args={[0.06, 0.08, 0.06, 16]} />
          <meshStandardMaterial color="#ffd700" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh castShadow>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial 
            color="#00ffff" 
            roughness={0.1} 
            emissive="#00e5ff" 
            emissiveIntensity={hovered ? 1.5 : 0.6} 
          />
        </mesh>
        <pointLight color="#00ffff" intensity={hovered ? 1.8 : 0.5} distance={1.0} decay={2} />
      </group>

      {/* BOOKS - SHELF 4 (Y = 1.75) */}
      <Book color="#805ad5" pos={[-0.15, 1.9, 0]} />
      <Book color="#3182ce" pos={[-0.09, 1.9, 0.01]} />
      <Book color="#38a169" pos={[-0.03, 1.9, 0]} />
      <Book color="#dd6b20" pos={[0.1, 1.88, 0.02]} height={0.24} rot={[0, 0, -0.15]} />
    </group>
  );
}
