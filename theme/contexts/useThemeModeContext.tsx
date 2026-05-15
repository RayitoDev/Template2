'use client';
import { createContext, useContext } from 'react';
import type { ThemeContextProps } from '@/theme/types';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

function useThemeMode() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeMode debe usarse dentro de un ThemeProvider.');
    }
    return context;
}

export { useThemeMode, ThemeContext };