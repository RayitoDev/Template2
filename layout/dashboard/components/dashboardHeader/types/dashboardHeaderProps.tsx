import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';
import type { Breakpoint } from '@mui/material/styles';
import type { NavigationProps } from '@/layout/dashboard/types';

type DashboardHeaderProps = {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    slotProps?: HeaderSectionProps;
    layoutQuery: Breakpoint;
    navigations: NavigationProps[];
}

export default DashboardHeaderProps;