import { EcctrlJoystick } from 'ecctrl'

import useDeviceDetection from '@/hooks/use-device-detection'

function MobileControls() {
  const { isMobile } = useDeviceDetection()
  return isMobile ? <EcctrlJoystick /> : null
}

export default MobileControls
