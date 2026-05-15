'use client';
import { usePageCurrentContext } from '@/layout/auth/contexts';
import { useEffect } from 'react';

function HomePage() {
    const { namePageCurrent, setNamePageCurrent } = usePageCurrentContext();


    useEffect(()=>{
        setNamePageCurrent('Home');
    });    
    return (
        <h1>{namePageCurrent}</h1>
    );
}

export default HomePage;