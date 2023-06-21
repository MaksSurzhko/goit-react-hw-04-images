
import React, { useEffect } from "react";
import mcss from '../modal/mcss.module.css';

const Modal = ({ active, setActive, children, closeModal }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.keyCode === 27) {
  //       closeModal();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [closeModal]);

 

  return (
    <div className={active ? `${mcss.modal} ${mcss.active}` : mcss.modal} onClick={() => setActive(false)}>
      <div className={mcss.modalCont} onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;



