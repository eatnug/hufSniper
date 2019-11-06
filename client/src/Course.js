import React from "react";

const Course = ({ ctx: { apply, professor, index, timePlace, grade, title } }) => {
  return <div className="course" onClick={() => {}}>{`${title} //${professor}// ${apply}`}</div>;
};

export default Course;
