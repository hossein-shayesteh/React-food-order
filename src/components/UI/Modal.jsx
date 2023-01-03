import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";
// BackDrop component
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};
// ModalOverlay component
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
// Modal component
const Modal = (props) => {
  const BackDropRoot = document.getElementById("overlays");
  const ModalOverlayRoot = document.getElementById("modal");
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        BackDropRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        ModalOverlayRoot
      )}
    </>
  );
};
export default Modal;
