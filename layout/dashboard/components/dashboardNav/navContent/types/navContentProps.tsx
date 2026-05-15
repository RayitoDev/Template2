import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
import type { NavigationProps } from '@/layout/dashboard/types';

type NavContentProps = {
  data: NavigationProps[];
  slots?: {
    topArea?: ReactNode;
    bottomArea?: ReactNode;
  };
  sx?: SxProps<Theme>;
};

export default NavContentProps;