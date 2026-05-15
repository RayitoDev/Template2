import { ToastPosition, TypeOptions } from 'react-toastify';

type ShowToastProps = {
    message: string | undefined;
    position: ToastPosition;
    type: TypeOptions;
  };

export default ShowToastProps;