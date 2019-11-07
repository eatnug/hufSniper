import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalOn, modalOff } from "./actions";
import Modal from "./Modal";
import Course from "./Course";
function App() {
  const isModal = useSelector(state => state.isModal);
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        {courses.map((cur, ind) => (
          <Course key={ind} course={cur.info} ctx={cur.ctx} where={"App"} />
        ))}
      </div>
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
