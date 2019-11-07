import React from "react";
import './App.css'
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
      <div className="tracks__container">
        <div className="courses__container">
          aaaaaaa
          {courses.map((cur, ind) => (
            <Course key={ind} course={cur.info} ctx={cur.ctx} where={"App"} />
          ))}
        </div>
      </div>
      {isModal ? (
        <div className="modal__container">
          <Modal />
          <div className="button__container">
            <button className="button__self" onClick={() => dispatch(modalOff())}>
              off
            </button>
          </div>
        </div>
      ) : (
        <div className="button__container">
          <button className="button__self" onClick={() => dispatch(modalOn())}>
            Find
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
