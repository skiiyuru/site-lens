import { Physics } from '@react-three/rapier';
import Ground from './ground';
import Building from './building';
import Character from './character';
import { Suspense } from 'react';

const World = () => {
  return (
    <Suspense fallback={null}>
      <Physics>
        <Ground />
        <Building />
        <Character />
      </Physics>
    </Suspense>
  );
};

export default World;
