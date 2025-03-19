'use client';

import MobileControls from '@/features/marketing/home/components/mobile-controls';
import Scene from '@/features/marketing/home/components/scene';
import { Loader } from '@react-three/drei';

const Experience = () => {
  return (
    <>
      <Loader />
      <Scene />
      <MobileControls />
    </>
  );
};

export default Experience;
