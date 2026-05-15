import { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  responsive?: boolean;
};

export default ModalProps;