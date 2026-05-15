import { Theme } from '@mui/material/styles';

const getMainColor = (theme: Theme) => theme.palette.mode === 'dark' ? theme.vars.palette.warning.dark : theme.vars.palette.primary.main;

export default getMainColor;
