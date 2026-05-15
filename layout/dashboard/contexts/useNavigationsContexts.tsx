'use client';
import { createContext, useContext } from 'react';
import type { NavigationsContextProps } from '@/layout/dashboard/types';

const NavigationsContext = createContext<NavigationsContextProps | undefined>(undefined);

const useNavigationsContexts = (): NavigationsContextProps => {
    const context = useContext(NavigationsContext);
    if (!context) {
        throw new Error('useNavigationsContexts must be used within a NavigationsProvider');
    }
    return context;
};

export { NavigationsContext, useNavigationsContexts };
