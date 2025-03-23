'use client'

import { Loader } from '@react-three/drei'

import MobileControls from '@/features/marketing/home/components/mobile-controls'
import Scene from '@/features/marketing/home/components/scene'

function Experience() {
  return (
    <>
      <Loader />
      <Scene />
      <MobileControls />
    </>
  )
}

export default Experience
