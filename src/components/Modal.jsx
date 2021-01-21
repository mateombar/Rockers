import React from "react";
import ReactDom from 'react-dom';
import './styles/Modal.css';
function Modal(props) {
  if(!props.isOpen){
    return null;
  }
  return ReactDom.createPortal(
    <div className="modal">
      <div className="modal__container">
        <button onClick={props.onCloseModal} className="modal__close-button">X</button>
        {props.children}
      </div>
    </div>,
    document.getElementById("delete_modal")
  );
}
export default Modal;
