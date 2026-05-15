import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeVarsProvider } from '@mui/material/styles';
import { createTheme } from '@/theme/utils';
import type {} from '@/theme/extendThemeTypes.d';
import { useMemo } from 'react';
import type { ThemeProviderProps } from '@/theme/types';
import useThemeMode from '@/theme/hooks';
import { ThemeContext } from '@/theme/contexts';

function ThemeProvider({ themeOverrides, children, defaultMode = 'light', ...other }: ThemeProviderProps) {
    const { mode, setMode } = useThemeMode(defaultMode);

    const setDefaultMode = (newDefaultMode: 'light' | 'dark') => {
        setMode(newDefaultMode);
    };

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
    };

    const theme = useMemo(() => createTheme({ themeOverrides, colorScheme: mode }), [themeOverrides, mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleMode, setDefaultMode }}>
            <ThemeVarsProvider disableTransitionOnChange theme={theme} {...other}>
                <CssBaseline />
                {children}
            </ThemeVarsProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;