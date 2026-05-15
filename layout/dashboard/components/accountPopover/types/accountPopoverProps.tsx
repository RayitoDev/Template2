import type { IconButtonProps } from '@mui/material/IconButton';
import { ReactNode } from 'react';

type AccountPopoverProps = IconButtonProps & {
  data?: {
    label: string;
    href: string;
    icon?: ReactNode;
    info?: ReactNode;
  }[];
};

export default AccountPopoverProps;