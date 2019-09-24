import React from "react";
import Form from "./Form";
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { modalCloser } = this.props;
    return (
      <div className="modal">
        <div className="form__container">
          <Form />
        </div>
        <div className="courses">
          courses
        </div>
        <button className="modal__closer" onClick={modalCloser}>
          Close
        </button>
      </div>
    );
  }
}

export default Modal;
