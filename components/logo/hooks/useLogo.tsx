import { useTheme } from '@mui/material';

function useLogo() {
    const theme = useTheme();

    const logo = theme.palette.mode === 'light'
        ? 'https://satq.qroo.gob.mx/logos/LOGO-CONJUNTO-COMPACTO.png'
        : 'https://satq.qroo.gob.mx/logos/LOGO-CONJUNTO-COMPACTO-BLANCO.png';

    return { logo };
}

export default useLogo;