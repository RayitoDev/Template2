import type { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles';
import type { ThemeOptions } from '@/theme/types';

type ThemeProviderProps = Partial<MuiThemeProviderProps> & {
    themeOverrides?: ThemeOptions;
    defaultMode?: 'light' | 'dark';
    children: React.ReactNode;
};

export default ThemeProviderProps;