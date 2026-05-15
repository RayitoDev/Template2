'use client';
import { createContext, useContext } from 'react';
import type { SpinnerContextProps } from '@/components/spinner/types';

const SpinnerContext = createContext<SpinnerContextProps | undefined>(undefined);

const useSpinnerContext = (): SpinnerContextProps => {
    const context = useContext(SpinnerContext);
    if (!context) {
        throw new Error('useSpinnerContext debe usarse dentro de un SpinnerProvider');
    }
    return context;
};

export { SpinnerContext, useSpinnerContext };
