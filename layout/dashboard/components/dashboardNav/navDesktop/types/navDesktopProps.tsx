import type NavContentProps from '@/layout/dashboard/components/dashboardNav/navContent/types';
import { Breakpoint } from '@mui/material/styles';

type NavDesktopProps = NavContentProps & {
  layoutQuery: Breakpoint;
}

export default NavDesktopProps;