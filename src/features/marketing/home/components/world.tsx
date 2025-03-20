import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'

import Building from './building'
import Character from './character'
import Ground from './ground'

function World() {
  return (
    <Suspense fallback={null}>
      <Physics>
        <Ground />
        <Building />
        <Character />
      </Physics>
    </Suspense>
  )
}

export default World
