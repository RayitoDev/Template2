import { useBoolean } from 'minimal-shared/hooks';
import { useTheme } from '@mui/material/styles';
import layoutClasses from '@/layout/core/utils/layoutClasses';
import dashboardLayoutVars from '@/layout/dashboard/styles';
import { LayoutSection } from '@/layout/core/components';
import { useNavigationsContexts } from '@/layout/dashboard/contexts';
import { DashboardHeader, DashboardMain, NavDesktop } from '@/layout/dashboard/components';
import type { DashboardLayoutProps } from '@/layout/dashboard/types';

function DashboardLayout({
    sx,
    cssVars,
    children,
    slotProps,
    layoutQuery = 'lg',
}: DashboardLayoutProps) {
    const theme = useTheme();
    const { navigations } = useNavigationsContexts();
    const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

    return (
        <LayoutSection
            headerSection={
                <DashboardHeader
                    open={open}
                    onOpen={onOpen}
                    onClose={onClose}
                    slotProps={slotProps?.header}
                    layoutQuery={layoutQuery}
                    navigations={navigations}
                />
            }
            sidebarSection={
                <NavDesktop data={navigations} layoutQuery={layoutQuery} />
            }
            footerSection={null}
            cssVars={{ ...dashboardLayoutVars(theme), ...cssVars }}
            sx={[
                {
                    [`& .${layoutClasses.sidebarContainer}`]: {
                        [theme.breakpoints.up(layoutQuery)]: {
                            pl: 'var(--layout-nav-vertical-width)',
                            transition: theme.transitions.create(['padding-left'], {
                                easing: 'var(--layout-transition-easing)',
                                duration: 'var(--layout-transition-duration)',
                            }),
                        },
                    },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <DashboardMain slotProps={slotProps?.main}>{children}</DashboardMain>
        </LayoutSection>
    );
}

export default DashboardLayout;
