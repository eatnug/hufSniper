import React from "react";

const Find = ({ modalOpener }) => {
  return (
    <div className="button__container">
      <button className="modal__opener" onMouseDown={modalOpener}>
        Find
      </button>
    </div>
  );
};

export default Find;
