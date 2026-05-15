'use client';
import { useState, useEffect } from 'react';
import type { ThemeContextProps } from '@/theme/types';

const STORAGE_KEY = 'themeMode';

function useThemeMode(defaultMode: 'light' | 'dark' = 'light') {
    const [mode, setModeState] = useState<ThemeContextProps['mode']>(defaultMode);

    useEffect(() => {
        const storedMode = localStorage.getItem(STORAGE_KEY) as 'light' | 'dark' | null;
        if (storedMode === 'light' || storedMode === 'dark') {
            setModeState(storedMode);
        }
    }, []);

    const setMode = (newMode: 'light' | 'dark') => {
        localStorage.setItem(STORAGE_KEY, newMode);
        setModeState(newMode);
    };

    return {
        mode,
        setMode,
    };
}

export default useThemeMode;
