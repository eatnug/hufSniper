import React from "react";
import "./Course.css";

const Course = ({
  grade,
  number,
  title,
  professor,
  time,
  classroom,
  apply
}) => {
  return (
    <div className="course">
      <div className="course__grade">{grade} grade</div>
      <div className="course__number">{number}</div>
      <div className="course__title">{title}</div>
      <div className="course__professor">{professor}</div>
      <div className="course__time">{time}</div>
      <div className="course__classroom">{classroom}</div>
      <div className="course__apply">{apply}</div>
      <button className="addButton">Add</button>
    </div>
  );
};

export default Course;
