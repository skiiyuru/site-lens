// Temporary type definitions until ecctrl adds proper TypeScript support
// See: https://github.com/pmndrs/ecctrl/issues/82

declare module 'ecctrl' {
  import type { EcctrlAnimation } from '@react-three/drei'

  type EcctrlProps = {
    // Add any props you're actually using, or leave it open
    animations?: EcctrlAnimation
    debug?: boolean
    // Add other props as needed
    [key: string]: any
  }

  const Ecctrl: React.FC<EcctrlProps>
  export default Ecctrl
}
