import React from "react";
import Form from "./Form";
import Course from "./Course";
import "./Modal.css"
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: []
    };
    this.loadHandler = this.loadCourses.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  loadCourses = list => {
    this.setState({ courseList: list });
  };
  render() {
    const { modalCloser, trackAdder, redunChecker } = this.props;
    return (
      <div className="modal">
        <div className="form__container">
          <Form loadHandler={this.loadHandler} />
        </div>
        <div className="courses">
          {this.state.courseList.map(
            (
              { grade, courseNumber, title, professor, timePlace, apply },
              ind
            ) => (
              <Course
                track={false}
                key={ind}
                grade={grade}
                courseNumber={courseNumber}
                title={title}
                professor={professor}
                timePlace={timePlace}
                apply={apply}
                trackAdder={trackAdder}
                redunChecker={redunChecker}
                obj={ {grade, courseNumber, title, professor, timePlace, apply} }
              />
            )
          )}
        </div>
        <button className="modal__closer" onClick={modalCloser}>
          Close
        </button>
      </div>
    );
  }
}

export default Modal;
