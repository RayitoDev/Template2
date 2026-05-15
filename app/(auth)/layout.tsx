'use client';
import { ReactNode } from 'react';
import AuthLayout from '@/layout/auth';
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
        <ProgressProvider 
            color={theme.palette.mode === 'dark' ? '#B68400' : '#AB0A3D'}
            options={{ showSpinner: false }}
        >
            <AuthLayout>
                {children}
                <ToastContainer />
                <Spinner />
            </AuthLayout>
                
        </ProgressProvider>
        
    );
}

export default RootLayout;
