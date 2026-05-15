'use client';
import { Box, Button, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import AuthLayout from '@/layout/auth';

function NotFound() {
    const theme = useTheme();

    return (
        <AuthLayout>
            <Typography variant="h3" sx={{ mb: 2 }}>
                Lo sentimos, ¡página no encontrada!
            </Typography>

            <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>
                Lo sentimos, no pudimos encontrar la página que buscas. ¿Quizás escribiste mal la URL? Revisa la ortografía.
            </Typography>

            <Box
                component="img"
                src={theme.palette.mode === 'light' ? '/template-front/404.png' : '/template-front/404_dark.png'}
            />

            <Button component={Link} href="/" size="large" variant="contained" color="inherit">
                Inicio
            </Button>
        </AuthLayout>
    );
}

export default NotFound;
