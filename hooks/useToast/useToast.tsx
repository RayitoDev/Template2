import { toast, ToastOptions } from 'react-toastify';
import type ShowToastProps from '@/hooks/useToast/types';
import { useTheme } from '@mui/material';

function useToast() {
    const theme = useTheme();
    
    const showToast = ({ message, position, type }: ShowToastProps) => {
        const config: ToastOptions = {
            position: position,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme.palette.mode,
        };

        switch (type) {
        case 'success':
            toast.success(message, config);
            break;
        case 'error':
            toast.error(message, config);
            break;
        case 'warning':
            toast.warn(message, config);
            break;
        case 'info':
            toast.info(message, config);
            break;
        default:
            toast(message, config);
            break;
        }
    };

    return showToast;
}

export default useToast;