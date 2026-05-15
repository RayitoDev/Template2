'use client';
import { useEffect } from 'react';
import { Drawer, drawerClasses } from '@mui/material';
import { NavContent } from '@/layout/dashboard/components';
import { usePathname } from 'next/navigation';
import type NavMobileProps from '@/layout/dashboard/components/dashboardNav/navMobile/types';

function NavMobile({ sx, data, open, slots, onClose }: NavMobileProps) {
    const pathname = usePathname();

    useEffect(() => {
        if (open) {
            onClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Drawer
            open={open}
            onClose={onClose}
            sx={{
                [`& .${drawerClasses.paper}`]: {
                    pt: 2.5,
                    px: 2.5,
                    overflow: 'unset',
                    width: 'var(--layout-nav-mobile-width)',
                    ...sx,
                },
            }}
        >
            <NavContent data={data} slots={slots} />
        </Drawer>
    );
}

export default NavMobile;