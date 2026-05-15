'use client';
import { createContext, useContext } from 'react';
import { PageCurrentContextType } from '@/layout/auth/types';

const PageCurrentContext = createContext<PageCurrentContextType | undefined>(undefined);

const usePageCurrentContext = (): PageCurrentContextType => {
    const context = useContext(PageCurrentContext);
    if (!context) {
        throw new Error('usePageCurrentContext debe usarse dentro de un PageCurrentProvider');
    }
    return context;
};

export { usePageCurrentContext, PageCurrentContext };
