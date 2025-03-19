/* 
OPTIMIZATION:

- https://optimizeglb.com/dashboard (credits required)

*/

import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const PATH = '/models/house-grouped-v2.glb';

export default function Building() {
  const model = useGLTF(PATH);

  return (
    <RigidBody
      type="fixed"
      position={[-30, 0.3, -5]}
      colliders="trimesh"
      rotation-y={-Math.PI * 0.5}
    >
      <primitive object={model.scene} />
    </RigidBody>
  );
}

useGLTF.preload(PATH);
