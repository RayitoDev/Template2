'use client';
import { ReactNode } from 'react';
import DashboardLayout from '@/layout/dashboard';
import NavigationsProvider from '@/layout/dashboard/providers';
import { ToastContainer } from 'react-toastify';
import { Spinner } from '@/components';
import { AppProgressProvider as ProgressProvider } from '@bprogress/next';
import { useTheme } from '@mui/material';

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
    const theme = useTheme();
    
    return (
        <NavigationsProvider>
            <ProgressProvider 
                color={theme.palette.mode === 'dark' ? '#B68400' : '#AB0A3D'}
                options={{ showSpinner: false }}
            >
                <DashboardLayout>
                    {children}
                    <ToastContainer />
                    <Spinner />
                </DashboardLayout>
                    
            </ProgressProvider>
            
        </NavigationsProvider>
    );
}

export default RootLayout;