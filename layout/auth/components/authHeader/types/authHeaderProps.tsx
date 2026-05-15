import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';
import type { Breakpoint } from '@mui/material/styles';

type AuthHeaderProps = {
    layoutQuery: Breakpoint;
    slotProps?: HeaderSectionProps;
}

export default AuthHeaderProps;