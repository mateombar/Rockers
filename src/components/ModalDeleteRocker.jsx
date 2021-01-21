import React from "react";
import './styles/ModalContent.css';
function ModalDeleteRocker(props) {
  return (
    <div className="modalcontent">
      <div className="modalcontent__info">
        <h4>Are you soure you wanna Remove the Rocker?</h4>
      </div>
      <div className="modalcontent__actions">
        <button className="link_button-mini" onClick={props.onCancel}>Cancel</button>
        <button className="link_button-mini link_button-danger" onClick={props.onDeleteRocker}>Agree</button>
      </div>
    </div>
  );
}
export default ModalDeleteRocker;
