import { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSpinnerContext } from '@/components/spinner/contexts';

const Spinner: FC = () => {
    const { open } = useSpinnerContext();

    return(
        <Backdrop
            sx={{ 
                zIndex: (theme) => theme.zIndex.drawer + 1 
            }}
            open={open}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
};

export default Spinner;
