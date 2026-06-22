import { Laptop } from './Laptop';
import { Clipboard } from './Clipboard';
import { Terminal } from './Terminal';

export function Desk() {
  return (
    <group>
      {/* DESK TOP */}
      <mesh castShadow receiveShadow position={[0, 1.0, 0]}>
        <boxGeometry args={[3.0, 0.06, 1.4]} />
        <meshStandardMaterial color="#1f1d2b" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* DESK LEGS (Metal cylinders) */}
      {[
        [-1.4, 0.5, 0.6],
        [1.4, 0.5, 0.6],
        [-1.4, 0.5, -0.6],
        [1.4, 0.5, -0.6],
      ].map((pos, idx) => (
        <mesh key={idx} position={pos} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 1.0, 16]} />
          <meshStandardMaterial color="#0f0e15" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}

      {/* DESK LAMP */}
      <group position={[-0.4, 1.03, -0.5]}>
        {/* Lamp Base */}
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
          <meshStandardMaterial color="#00ffcc" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Lamp Neck (Angled Arm) */}
        <mesh position={[0, 0.25, 0.05]} rotation={[0.4, 0, 0]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.5, 8]} />
          <meshStandardMaterial color="#2d3748" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.5, 0.15]} rotation={[-0.4, 0, 0]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
          <meshStandardMaterial color="#2d3748" roughness={0.6} />
        </mesh>
        {/* Lamp Shade (Head) */}
        <mesh position={[0.1, 0.58, 0.1]} rotation={[0, 0, -Math.PI / 4]} castShadow>
          <cylinderGeometry args={[0.08, 0.06, 0.15, 16]} />
          <meshStandardMaterial color="#00ffcc" roughness={0.3} metalness={0.7} />
        </mesh>
      </group>

      {/* KEYBOARD (Slim, in front of Laptop) */}
      <mesh position={[0, 1.03, 0.22]} castShadow>
        <boxGeometry args={[0.55, 0.015, 0.18]} />
        <meshStandardMaterial color="#f7fafc" roughness={0.4} />
      </mesh>
      {/* Keyboard keys area */}
      <mesh position={[0, 1.039, 0.22]}>
        <boxGeometry args={[0.52, 0.005, 0.15]} />
        <meshStandardMaterial color="#1a202c" roughness={0.7} />
      </mesh>

      {/* MOUSE (Next to keyboard) */}
      <mesh position={[0.35, 1.03, 0.22]} castShadow>
        <boxGeometry args={[0.07, 0.02, 0.11]} />
        <meshStandardMaterial color="#2d3748" roughness={0.3} />
      </mesh>

      {/* COFFEE MUG */}
      <group position={[0.42, 1.03, 0.05]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.12, 16]} />
          <meshStandardMaterial color="#ff5a36" roughness={0.4} />
        </mesh>
        {/* Mug handle */}
        <mesh position={[0.05, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.03, 0.01, 8, 24]} />
          <meshStandardMaterial color="#ff5a36" />
        </mesh>
        {/* Coffee Liquid */}
        <mesh position={[0, 0.051, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.005, 16]} />
          <meshStandardMaterial color="#4a2c11" roughness={0.1} />
        </mesh>
      </group>

      {/* POTTED PLANT */}
      <group position={[-1.2, 1.03, -0.45]}>
        {/* Pot */}
        <mesh castShadow>
          <cylinderGeometry args={[0.09, 0.07, 0.14, 16]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.8} />
        </mesh>
        {/* Soil */}
        <mesh position={[0, 0.065, 0]}>
          <cylinderGeometry args={[0.082, 0.082, 0.01, 16]} />
          <meshStandardMaterial color="#4a3728" roughness={0.9} />
        </mesh>
        {/* Succulent Leaves (Staggered Spheres) */}
        {[
          [0, 0.12, 0, 0.06],
          [0.04, 0.1, 0.03, 0.045],
          [-0.04, 0.1, -0.03, 0.045],
          [0.03, 0.1, -0.04, 0.045],
          [-0.03, 0.1, 0.04, 0.045],
        ].map((leaf, idx) => (
          <mesh key={idx} position={[leaf[0], leaf[1], leaf[2]]} castShadow>
            <sphereGeometry args={[leaf[3], 8, 8]} />
            <meshStandardMaterial color="#48bb78" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* ATTACHED WORKSTATION DEVICES */}
      <Laptop />
      <Clipboard />
      <Terminal />
    </group>
  );
}
