'use client';
import { useState } from 'react';

const useSpinner = () => {
    const [open, setOpen] = useState<boolean>(false);

    return { open, setOpen };
};

export default useSpinner;