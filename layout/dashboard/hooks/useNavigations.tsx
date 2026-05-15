import { useState } from 'react';
import type { NavigationProps } from '@/layout/dashboard/types';

function useNavigations() {
    const [navigations, setNavigations] = useState<NavigationProps[]>([]);

    return { navigations, setNavigations };
}

export default useNavigations;
