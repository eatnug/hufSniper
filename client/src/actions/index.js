export const modalOn = () => {
  return {
    type: "modalOn"
  };
};
export const modalOff = () => {
  return {
    type: "modalOff"
  };
};

export const addCourse = course => {
  return {
    type: "ADD_COURSE",
    course
  };
};
export const remCourse = courseNumber => {
    return {
      type: "REM_COURSE",
      courseNumber
    };
  };
  
