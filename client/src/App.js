import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalOn, modalOff } from "./actions";
import Modal from "./Modal";
function App() {
  const isModal = useSelector(state => state.isModal);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(modalOn())}>Find</button>
      {isModal ? (
        <div>
          <Modal />
          <button onClick={() => dispatch(modalOff())}>off</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
