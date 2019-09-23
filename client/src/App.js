import React from "react";
import axios from "axios";
import Course from "./Course";
import Find from "./Find";
import Modal from "./Modal"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      loaded: false,
      courses: [
        {
          grade: 1,
          number: "a1234",
          title: "first",
          professor: "eatnug",
          time: "월 456",
          classroom: "3203",
          apply: "10/10"
        },
        {
          grade: 1,
          number: "b5678",
          title: "second",
          professor: "eatnug",
          time: "화 123",
          classroom: "0013",
          apply: "20/20"
        }
      ]
    };
    this.modalOpener = this.openModal.bind(this);
    this.modalCloser = this.closeModal.bind(this);
  }

  openModal = () => this.setState({ isModal: true });
  closeModal = () => this.setState({ isModal: false });

  render = () => {
    const {courses, isModal} = this.state
    return (
      <div className="container">
        <div className="courses">
          {courses.map(
            (
              { grade, number, title, professor, time, classroom, apply },
              ind
            ) => (
              <Course
                key={ind}
                grade={grade}
                number={number}
                title={title}
                professor={professor}
                time={time}
                classroom={classroom}
                apply={apply}
              />
            )
          )}
        </div>
        <Find modalOpener={this.modalOpener} />
        {isModal ? <Modal modalCloser={this.modalCloser}/> : null}
      </div>
    );
  };
}

export default App;
