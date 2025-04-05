import React from 'react';
import Swal from 'sweetalert2';

const SwalComponent = ({ title, text, icon, confirmText, cancelText, onConfirm, onCancel }) => {
  
  const showSwal = async () => {
    const result = await Swal.fire({
      title: title || 'Are you sure?', 
      text: text || 'You won\'t be able to revert thissss!',
      icon: icon || 'warning', 
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: confirmText || 'Yes, delete it!', 
      cancelButtonText: cancelText || 'No, keep it', 
    });

    if (result.isConfirmed) {
      onConfirm(); 
    } else if (onCancel) {
      onCancel();
    }
  };

  React.useEffect(() => {
    showSwal();
  }, []);

  return null; 
};

export default SwalComponent;
