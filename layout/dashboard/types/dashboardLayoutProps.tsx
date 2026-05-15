import type { Breakpoint } from '@mui/material/styles';
import type MainSectionProps from '@/layout/core/components/mainSection/types';
import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';
import type { LayoutBaseProps } from '@/layout/dashboard/types';

type DashboardLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    main?: MainSectionProps;
  };
};

export default DashboardLayoutProps;