import React from "react";
import "./Modal.css";
class Modal extends React.Component {
  render() {
    const { modalCloser } = this.props;
    return (
      <div className="modal">
        Modal
        <button className="modal__closer" onClick={modalCloser}>
          Close
        </button>
      </div>
    );
  }
}

export default Modal;
