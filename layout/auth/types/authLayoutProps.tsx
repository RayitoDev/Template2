import type { Breakpoint } from '@mui/material/styles';
import type AuthContentProps from '@/layout/auth/components/authContent/types';
import type MainSectionProps from '@/layout/core/components/mainSection/types';
import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';
import type { LayoutBaseProps } from '@/layout/auth/types';

type AuthLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    main?: MainSectionProps;
    content?: AuthContentProps;
  };
};

export default AuthLayoutProps;
