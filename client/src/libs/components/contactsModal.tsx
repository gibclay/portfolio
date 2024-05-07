import { useCallback, useRef, useState } from "react";
import { Button, Modal } from "react-daisyui";
import { createPortal } from "react-dom";

const ContactsModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const modalRef = useRef(null);

  // const handleShow = useCallback(() => {
  //   modalRef.current?.showModal();
  // }, [modalRef]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button className="btn btn-sm btn-ghost" onClick={() => handleOpen()}>
        About Me
      </Button>
      <dialog open={open} className="modal">
        <div className="modal-box modal-middle">
          <Button
            size="sm"
            color="ghost"
            shape="circle"
            className="absolute right-2 top-2"
            onClick={handleOpen}
          >
            x
          </Button>
          <Modal.Header className="font-bold">Contact Me</Modal.Header>
          <Modal.Body>
            <p>Phone: +1 (289) 501-3036</p>
            <p>Email:</p>
            <p>LinkedIn:</p>
            <p>GitHub:</p>
          </Modal.Body>
          <Modal.Actions></Modal.Actions>
        </div>
      </dialog>
    </>
  );
};

export default ContactsModal;
