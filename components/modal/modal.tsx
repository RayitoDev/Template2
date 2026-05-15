import {
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { Transition, BootstrapDialog } from '@/components/modal/styles';
import ModalProps from '@/components/modal/types/modalProps';
  
function Modal({ open, onClose, title, children, actions, responsive = false }: ModalProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
        <BootstrapDialog
            fullScreen={responsive ? fullScreen : false}
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="modal-title"
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {title}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
            {actions && <DialogActions>{actions}</DialogActions>}
        </BootstrapDialog>
    );
}
  
export default Modal;  