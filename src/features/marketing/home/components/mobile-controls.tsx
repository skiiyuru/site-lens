import useDeviceDetection from '@/hooks/useDeviceDetection';
import { EcctrlJoystick } from 'ecctrl';

const MobileControls = () => {
  const { isMobile } = useDeviceDetection();
  return isMobile ? <EcctrlJoystick /> : null;
};

export default MobileControls;
