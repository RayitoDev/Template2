'use client';
import { styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import type ScrollbarProps from '@/layout/dashboard/components/scrollbar/types';

const ScrollbarRoot = styled(SimpleBar, {
    shouldForwardProp: (prop: string) => !['fillContent', 'sx'].includes(prop),
})<Pick<ScrollbarProps, 'fillContent'>>(({ fillContent }) => ({
    minWidth: 0,
    minHeight: 0,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    ...(fillContent && {
        '& .simplebar-content': {
            display: 'flex',
            flex: '1 1 auto',
            minHeight: '100%',
            flexDirection: 'column',
        },
    }),
}));

export default ScrollbarRoot;