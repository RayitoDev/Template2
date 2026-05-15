import type NavContentProps from '@/layout/dashboard/components/dashboardNav/navContent/types';

type NavMobileProps = NavContentProps & {
  open: boolean;
  onClose: () => void;
};

export default NavMobileProps;