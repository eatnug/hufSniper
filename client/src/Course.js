import React from "react";
import "./Course.css";

const Course = ({
  track,
  grade,
  courseNumber,
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
      <div className="course__grade">{grade ? grade : '-'} grade</div>
      <div className="course__title">{title}</div>
      <div className="course__professor">{professor}</div>
      <div className="course__timePlace">{timePlace}</div>
      <div className="course__apply">{apply}</div>
      {track ? (
        "Delete"
      ) : (
        <button
          className="addButton"
          onClick={() => {
            const [now, limit] = apply.split("/");
            if (limit - now >= 1) alert("seat available");
            else if (!redunChecker(courseNumber)) trackAdder(obj);
            else alert("already tracking");
          }}
        >Track</button>
      )}
    </div>
  );
};

export default Course;
