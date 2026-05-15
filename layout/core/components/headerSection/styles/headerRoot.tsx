'use client';
import { styled } from '@mui/material/styles';
import type { CSSObject } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import type { HeaderRootProps } from '@/layout/core/components/headerSection/types';

const HeaderRoot = styled(AppBar, {
    shouldForwardProp: (prop: string) =>
        !['isOffset', 'disableOffset', 'disableElevation', 'sx'].includes(prop),
})<HeaderRootProps>(({ isOffset, disableElevation, theme }) => {
    const pauseZindex = { top: -1, bottom: -2 };

    const pauseStyles: CSSObject = {
        opacity: 0,
        content: '""',
        visibility: 'hidden',
        position: 'absolute',
        transition: theme.transitions.create(['opacity', 'visibility'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
        }),
    };

    const shadowStyles: CSSObject = {
        ...pauseStyles,
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        margin: 'auto',
        borderRadius: '50%',
        width: 'calc(100% - 48px)',
        zIndex: pauseZindex.bottom,
        boxShadow: theme.vars.customShadows.z8,
        ...(isOffset && { opacity: 0.48, visibility: 'visible' }),
    };

    return {
        boxShadow: 'none',
        zIndex: 'var(--layout-header-zIndex)',
        ...(!disableElevation && { '&::after': shadowStyles }),
    };
});

export default HeaderRoot;