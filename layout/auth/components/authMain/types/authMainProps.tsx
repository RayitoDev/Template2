import type { Breakpoint } from '@mui/material/styles';
import type AuthContentProps from '@/layout/auth/components/authContent/types';
import type MainSectionProps from '@/layout/core/components/mainSection/types';

type AuthMainProps = {
  layoutQuery: Breakpoint;
  slotProps?: {
    main?: MainSectionProps;
    content?: AuthContentProps;
  };
  children: React.ReactNode;
}

export default AuthMainProps;