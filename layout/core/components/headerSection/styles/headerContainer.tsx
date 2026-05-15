'use client';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';

const HeaderContainer = styled(Container, {
    shouldForwardProp: (prop: string) => !['layoutQuery', 'sx'].includes(prop),
})<Pick<HeaderSectionProps, 'layoutQuery'>>(({ layoutQuery = 'md', theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: 'var(--color)',
    height: 'var(--layout-header-mobile-height)',
    [theme.breakpoints.up(layoutQuery)]: { height: 'var(--layout-header-desktop-height)' },
}));

export default HeaderContainer;