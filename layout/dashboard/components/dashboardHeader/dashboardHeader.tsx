import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderSection } from '@/layout/core/components';
import { AccountPopover, NavMobile } from '@/layout/dashboard/components';
import { merge } from 'es-toolkit';
import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';
import type DashboardHeaderProps from '@/layout/dashboard/components/dashboardHeader/types';

function DashboardHeader({
    open,
    onClose,
    onOpen,
    slotProps,
    layoutQuery,
    navigations,
}: DashboardHeaderProps) {
    const headerSlotProps: HeaderSectionProps['slotProps'] = {
        container: {
            maxWidth: false,
        },
    };

    const headerSlots: HeaderSectionProps['slots'] = {
        leftArea: (
            <>
                <IconButton
                    onClick={onOpen}
                    sx={{
                        mr: 1,
                        ml: -1,
                        display: { [layoutQuery]: 'none' },
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <NavMobile data={navigations} open={open} onClose={onClose} />
            </>
        ),
        rightArea: (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0, sm: 0.75 } }}>
                <AccountPopover data={[]}/>
            </Box>
        ),
    };

    return (
        <HeaderSection
            disableElevation
            layoutQuery={layoutQuery}
            {...slotProps}
            slots={{ ...headerSlots, ...slotProps?.slots }}
            slotProps={merge(headerSlotProps, slotProps?.slotProps ?? {})}
            sx={slotProps?.sx}
        />
    );
}

export default DashboardHeader;