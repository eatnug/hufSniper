import React from "react";
import "./Course.css";

const Course = ({
  grade,
  number,
  title,
  professor,
  timePlace,
  apply,
  trackAdder,
  redunChecker,
  obj
}) => {
  return (
    <div className="course">
      <div className="course__grade">{grade} grade</div>
      <div className="course__number">{number}</div>
      <div className="course__title">{title}</div>
      <div className="course__professor">{professor}</div>
      <div className="course__timePlace">{timePlace}</div>
      <div className="course__apply">{apply}</div>
      <button className="addButton" onClick={() => {
        if(!redunChecker(obj)) trackAdder(obj)
        else alert("already tracking")
        }}>Add</button>
    </div>
  );
};

export default Course;
