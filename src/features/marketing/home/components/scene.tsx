import World from '@/features/marketing/home/components/world';
import { Environment, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

const Scene = () => {
  return (
    <Canvas
      className="h-screen"
      camera={{
        fov: 45,
      }}
    >
      <Perf position="top-right" />

      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />

      <Environment preset="city" />

      <World />
    </Canvas>
  );
};

export default Scene;
