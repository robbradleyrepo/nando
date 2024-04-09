import React from 'react'; 
import '../styles/atoms/modal.scss';
// import Button from './button';

interface ModalProps {
  onClick: () => void; // extend here for cancel / confirm CTA within modal content etc
  children: any;
  disabled?: false; 
}
 
const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
 
  return (
    <div className="e-modal">
        <div className="e-modal__inner">
            {/* <Button>
                Close Modal
            </Button> */}
            {children}

        </div>
    </div>
  );
};
export default Modal;  