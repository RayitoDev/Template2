import { Theme } from '@mui/material/styles';

export const getMainColor = (theme: Theme) =>
    theme.palette.mode === 'dark'
        ? theme.vars.palette.primary.light
        : theme.vars.palette.primary.main;
        
export default getMainColor;
