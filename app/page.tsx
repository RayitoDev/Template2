'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Home() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

export default Home;