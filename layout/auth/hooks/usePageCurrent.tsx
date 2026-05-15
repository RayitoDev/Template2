'use client';
import { useState } from 'react';

function usePageCurrent() {
    const [namePageCurrent, setNamePageCurrent] = useState<string | null>(null);

    return {
        namePageCurrent,
        setNamePageCurrent
    };
}

export default usePageCurrent;