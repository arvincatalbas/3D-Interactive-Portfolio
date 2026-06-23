import { Lights } from './Lights';
import { Desk } from './Desk';
import { Bookshelf } from './Bookshelf';
import { WallFrames } from './WallFrames';
import { CameraMover } from './CameraMover';

export function Room({ theme }) {
  const floorColor = '#13151b';
  const wallColor = '#0b0c10';

  return (
    <group>
      {/* 3D SCENE LIGHTS */}
      <Lights theme={theme} />

      {/* CAMERA NAVIGATION CONTROLLER */}
      <CameraMover />

      {/* FLOOR */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={floorColor} roughness={0.9} />
      </mesh>

      {/* FLOOR BORDER GRID / LINES (To give structure to floor) */}
      <gridHelper args={[7, 14, '#1f2430', '#171923']} position={[0, 0.001, 0]} />

      {/* BACK WALL (Z = -3.5) */}
      <mesh position={[0, 1.8, -3.5]} receiveShadow>
        <boxGeometry args={[7, 3.6, 0.08]} />
        <meshStandardMaterial color={wallColor} roughness={0.8} />
      </mesh>

      {/* LEFT WALL (X = -3.5) */}
      <mesh position={[-3.5, 1.8, 0]} receiveShadow>
        <boxGeometry args={[0.08, 3.6, 7]} />
        <meshStandardMaterial color={wallColor} roughness={0.8} />
      </mesh>

      {/* CORNER NEON GOW STRIP (Back left corner intersection) */}
      <mesh position={[-3.48, 1.8, -3.48]}>
        <cylinderGeometry args={[0.02, 0.02, 3.6, 8]} />
        <meshBasicMaterial color={theme.colors.secondary} />
      </mesh>

      {/* FURNITURE & OBJECTS */}
      <Desk theme={theme} />
      <Bookshelf />
      <WallFrames theme={theme} />
      
      {/* FLOOR RUG */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 1.0]} receiveShadow>
        <planeGeometry args={[2.0, 1.2]} />
        <meshStandardMaterial color="#4a3e68" roughness={1.0} />
      </mesh>
    </group>
  );
}
