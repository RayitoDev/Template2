'use client';
import { useEffect } from 'react';
import useNavigations from '@/layout/dashboard/hooks';
import HomeIcon from '@mui/icons-material/Home';
import type { NavigationProps, NavigationsProviderProps } from '@/layout/dashboard/types';
import { NavigationsContext } from '@/layout/dashboard/contexts';

const NavigationsProvider = ({ children }: NavigationsProviderProps) => {
    const { navigations, setNavigations } = useNavigations();

    const baseNavItems: NavigationProps[] = [
        {
            id: 1,
            title: 'Home',
            path: '/home/',
            icon: <HomeIcon />
        }
    ];

    useEffect(() => {
        setNavigations(baseNavItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <NavigationsContext.Provider value={{ navigations }}>
            {children}
        </NavigationsContext.Provider>
    );
};


export default NavigationsProvider;
