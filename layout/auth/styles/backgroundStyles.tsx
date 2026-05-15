import type { CSSObject } from '@mui/material/styles';

const backgroundStyles = (): CSSObject => ({
    zIndex: 1,
    opacity: 0.24,
    width: '100%',
    height: '100%',
    content: '\'\'',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: 'url(/template-front/wallpaper.jpeg)',
});

export default backgroundStyles;