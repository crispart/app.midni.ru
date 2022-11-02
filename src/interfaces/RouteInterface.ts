import IconName from '@/constants/enum/IconName';

interface RouteInterface {
  path: string;
  label: string;
  icon: keyof typeof IconName;
}

export default RouteInterface;
