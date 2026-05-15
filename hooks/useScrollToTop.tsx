'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';


function useScrollToTop(): void {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

export default useScrollToTop;