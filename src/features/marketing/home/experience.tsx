'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Experience = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        position: [0, 0, 5],
      }}
    >
      <OrbitControls />
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial flatShading />
      </mesh>
    </Canvas>
  );
};

export default Experience;
