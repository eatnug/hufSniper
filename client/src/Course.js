import React from "react";
import { addCourse, remCourse } from "./actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";
const Course = ({ ctx, course, where }) => {
  const dispatch = useDispatch();
  return (
    <div className="course__container">
      <div className="course__detail">{`${course.title} //${course.professor}// ${course.apply}`}</div>
      {where === "form" ? (
        <div className="button__container">
          <button
            className="button__self"
            onClick={() => {
              axios.post("http://127.0.0.1:3000/api/getLeftSeat", qs.stringify({ ...ctx, index: course.index })).then(res => {
                alert(res.data.code);
                dispatch(remCourse(course.courseNumber));
              });
              return dispatch(addCourse({ info: course, ctx }));
            }}
          >
            add
          </button>
        </div>
      ) : (
        <div className="button__container">
          <button
            className="button__self"
            onClick={() => {
              axios.post("http://127.0.0.1:3000/api/stopTracking", qs.stringify({ ...ctx, index: course.index })).then(res => {
                alert(res.data.code);
              });
              return dispatch(remCourse(course.courseNumber));
            }}
          >
            rem
          </button>
        </div>
      )}
    </div>
  );
};

export default Course;
