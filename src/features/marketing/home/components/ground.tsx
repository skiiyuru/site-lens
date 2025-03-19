import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

export default function Ground() {
  const props = useTexture({
    map: '/textures/gravel/Color.jpg',
    aoMap: '/textures/gravel/AmbientOcclusion.jpg', // will add shadows where the texture is dark. (env, ambient, hemisphere)
    displacementMap: '/textures/gravel/Height.png', // will move the vertices to create true relief (add more subdivisions to the geom to enhance look)
    normalMap: '/textures/gravel/Normal.jpg', // will fake the normal orientation and add details to the surface regardless of the subdivision
    roughnessMap: '/textures/gravel/Roughness.jpg',
    // alphaMap for transparent parts (needs transparent=true to work)
  });

  // Configure texture settings
  props.map.wrapS = THREE.RepeatWrapping;
  props.map.wrapT = THREE.RepeatWrapping;
  // // map.minFilter = THREE.LinearFilter // Adjust minification filter
  // // map.magFilter = THREE.LinearFilter // Adjust magnification filter
  props.map.anisotropy = 4; // Set anisotropy for sharper textures at oblique angles

  return (
    <RigidBody type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000, 100, 100]} />
        <meshStandardMaterial
          {...props}
          aoMapIntensity={1}
          displacementScale={0.1}
          roughness={1}
          map-repeat={[240, 240]}
        />
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  );
}
