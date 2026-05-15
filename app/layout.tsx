// app/layout.tsx
'use client';
import { ReactNode } from 'react';
import ThemeProvider from '@/theme/providers';
import { useScrollToTop } from '@/hooks';
import PageCurrentProvider from '@/layout/auth/providers';
import SpinnerProvider from '@/components/spinner/providers';
import '@/styles/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
    if (process.env.NEXT_PUBLIC_APP_ENV == 'production') {
        console.warn = () => {};
        console.error = () => {};
    }

    useScrollToTop();

    return (
        <html lang="es">
            <head>
                <title>Servicio de Administración Tributaria de Quintana Roo</title>
                <meta name="description" content="Template" />
            </head>
            <body>
                <ThemeProvider>
                    <PageCurrentProvider>
                        <SpinnerProvider>{children}</SpinnerProvider>
                    </PageCurrentProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default RootLayout;
