'use client';
import { useEffect } from 'react';
import { LayoutSection } from '@/layout/core/components';
import backgroundStyles from '@/layout/auth/styles';
import AuthHeader from '@/layout/auth/components/authHeader';
import AuthMain from '@/layout/auth/components/authMain';
import { usePageCurrentContext } from '@/layout/auth/contexts';
import type { AuthLayoutProps } from '@/layout/auth/types';

function AuthLayout({
    sx,
    cssVars,
    children,
    slotProps,
    layoutQuery = 'md',
}: AuthLayoutProps) {
    const { setNamePageCurrent } = usePageCurrentContext();

    useEffect(() => {
        setNamePageCurrent('Template Front');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LayoutSection
            headerSection={<AuthHeader layoutQuery={layoutQuery} slotProps={slotProps?.header} />}
            footerSection={null}
            cssVars={{ '--layout-auth-content-width': '420px', ...cssVars }}
            sx={[
                () => ({
                    position: 'relative',
                    '&::before': backgroundStyles(),
                }),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <AuthMain layoutQuery={layoutQuery} slotProps={slotProps}>
                {children}
            </AuthMain>
        </LayoutSection>
    );
}

export default AuthLayout;