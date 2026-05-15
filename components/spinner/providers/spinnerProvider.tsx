import useSpinner from '@/components/spinner/hooks';
import type { SpinnerProviderProps } from '@/components/spinner/types';
import { SpinnerContext } from '@/components/spinner/contexts/useSpinnerContext';

const SpinnerProvider = ({ children }: SpinnerProviderProps) => {
    const { open, setOpen } = useSpinner();

    return (
        <SpinnerContext.Provider value={{ open, setOpen }}>
            {children}
        </SpinnerContext.Provider>
    );
};

export default SpinnerProvider;