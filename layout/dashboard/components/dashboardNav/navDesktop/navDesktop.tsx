import { Box } from '@mui/material';
import { varAlpha } from 'minimal-shared/utils';
import { NavContent } from '@/layout/dashboard/components';
import { useTheme } from '@mui/material/styles';
import type NavDesktopProps from '@/layout/dashboard/components/dashboardNav/navDesktop/types';

function NavDesktop({ sx, data, slots, layoutQuery }: NavDesktopProps) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: 2.5,
                px: 2.5,
                top: 0,
                left: 0,
                height: 1,
                display: 'none',
                position: 'fixed',
                flexDirection: 'column',
                zIndex: 'var(--layout-nav-zIndex)',
                width: 'var(--layout-nav-vertical-width)',
                borderRight: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                [theme.breakpoints.up(layoutQuery)]: {
                    display: 'flex',
                },
                ...sx,
            }}
        >
            <NavContent data={data} slots={slots} />
        </Box>
    );
}

export default NavDesktop;