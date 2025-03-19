import {
  KeyboardControls,
  type KeyboardControlsEntry,
} from '@react-three/drei';
import Ecctrl from 'ecctrl';
import { useMemo } from 'react';

export default function Character() {
  const buttonsMap = useMemo<KeyboardControlsEntry[]>(
    () => [
      { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
      { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
      { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
      { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
      { name: 'jump', keys: ['Space'] },
    ],
    [],
  );

  return (
    <KeyboardControls map={buttonsMap}>
      <Ecctrl
        mode="FixedCamera"
        camCollision={false}
        camInitDis={-0.01} // camera initial position
        camMinDis={-0.01}
        camFollowMult={1000}
        camLerpMult={1000}
        turnVelMultiplier={1}
        turnSpeed={100}
        maxVelLimit={2}
      >
        {/* Make the box invisible */}
        <mesh scale={0.5}>
          <boxGeometry />
          <meshBasicMaterial color={'tomato'} transparent opacity={0} />
        </mesh>
      </Ecctrl>
    </KeyboardControls>
  );
}
