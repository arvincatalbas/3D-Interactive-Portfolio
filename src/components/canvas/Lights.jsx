import { useRef } from 'react';

export function Lights({ theme }) {
  const dirLightRef = useRef();

  const colors = theme?.colors?.lights || {
    ambient: '#1a1835',
    directional: '#8aa8ff',
    spotDesk: '#00f3ff',
    spotCert: '#ff00cc',
  };

  return (
    <>
      {/* Soft ambient light for dark mode base */}
      <ambientLight color={colors.ambient} intensity={1.8} />

      {/* Directional light (simulating moonlight or window light) */}
      <directionalLight
        ref={dirLightRef}
        color={colors.directional}
        intensity={1.5}
        position={[8, 10, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.0005}
      />

      {/* Warm desk lamp point light */}
      <pointLight
        color="#ffa64d"
        intensity={3.0}
        position={[-0.3, 1.6, -0.4]}
        distance={5}
        decay={2}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-bias={-0.001}
      />

      {/* Subtle blue accent glow behind desk */}
      <spotLight
        color={colors.spotDesk}
        intensity={2.5}
        position={[0, 3, -2]}
        angle={Math.PI / 3}
        penumbra={1}
        distance={8}
      />

      {/* Subtle magenta accent glow on the certificate wall */}
      <spotLight
        color={colors.spotCert}
        intensity={2.0}
        position={[-2, 3, 2]}
        angle={Math.PI / 4}
        penumbra={1}
        distance={6}
      />
    </>
  );
}
