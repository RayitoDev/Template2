import { ReactNode, ComponentProps } from 'react';
import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

type LayoutSectionProps = ComponentProps<'div'> & {
  sx?: SxProps<Theme>;
  cssVars?: CSSObject;
  children?: ReactNode;
  footerSection?: ReactNode;
  headerSection?: ReactNode;
  sidebarSection?: ReactNode;
};

export default LayoutSectionProps;