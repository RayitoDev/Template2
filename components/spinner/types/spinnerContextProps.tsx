import { SetStateAction, Dispatch } from 'react';

type SpinnerContextProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default SpinnerContextProps;