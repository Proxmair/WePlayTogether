import React from "react";

interface ModalProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  triggerIcon?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ id, title, children, triggerIcon, onClose }) => {
  const handleOpen = () => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    } else {
      console.error(`Modal with id "${id}" not found.`);
    }
  };

  const handleClose = () => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.close();
      if (onClose) onClose();
    } else {
      console.error(`Modal with id "${id}" not found.`);
    }
  };

  return (
    <>
      {/* Modal Trigger */}
      <div className="tooltip" data-tip={title || "Open Modal"}>
        <button onClick={handleOpen} className="btn btn-ghost btn-circle shadow-lg">
          {triggerIcon || "Open"}
        </button>
      </div>

      {/* Modal */}
      <dialog id={id} className="modal">
        <div className="modal-box relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <div className="mt-4">{children}</div>
        </div>

        {/* Backdrop */}
        <form method="dialog" className="modal-backdrop">
             <button>close</button>
         </form>
      </dialog>
    </>
  );
};

export default Modal;
