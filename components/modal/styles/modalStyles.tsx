import { forwardRef, ReactElement, Ref } from 'react';
import { Slide, Dialog, SlideProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Transition = forwardRef(function Transition(
    props: SlideProps & { children: ReactElement },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
        width: '100%',
        maxWidth: '100%',
        [theme.breakpoints.up('md')]: {
            maxWidth: 600,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 800,
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: 1000,
        },
    },
}));

export { Transition, BootstrapDialog };