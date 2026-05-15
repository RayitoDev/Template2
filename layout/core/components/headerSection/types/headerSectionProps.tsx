import { ReactNode, ComponentProps } from 'react';
import type { AppBarProps } from '@mui/material/AppBar';
import type { ContainerProps } from '@mui/material/Container';
import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

type HeaderSectionProps = AppBarProps & {
  layoutQuery?: Breakpoint;
  disableElevation?: boolean;
  slots?: {
    leftArea?: ReactNode;
    rightArea?: ReactNode;
    centerArea?: ReactNode;
  };
  slotProps?: {
    container?: ContainerProps;
    centerArea?: ComponentProps<'div'> & { sx?: SxProps<Theme> };
  };
};

export default HeaderSectionProps;