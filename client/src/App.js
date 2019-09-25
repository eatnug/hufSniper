import React from "react";
import axios from "axios";
import Course from "./Course";
import Find from "./Find";
import Modal from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      loaded: false,
      trackings: []
    };
    this.modalOpener = this.openModal.bind(this);
    this.modalCloser = this.closeModal.bind(this);
    this.trackAdder = this.addTracking.bind(this);
    this.redunChecker = this.checkRedun.bind(this);
  }

  openModal = () => this.setState({ isModal: true });
  closeModal = () => this.setState({ isModal: false });
  addTracking = course =>
    this.setState({ trackings: this.state.trackings.concat(course) });
  checkRedun = courseNumber => {
    return this.state.trackings.filter(
      c => c.courseNumber === courseNumber
    ).length;
  };

  render = () => {
    const { trackings, isModal } = this.state;
    return (
      <div className="container">
        <div className="courses">
          {trackings.map(
            ({ grade, courseNumber, title, professor, timePlace, apply }, ind) => (
              <Course
                track={true}
                key={ind}
                grade={grade}
                courseNumber={courseNumber}
                title={title}
                timePlace={timePlace}
                professor={professor}
                apply={apply}
              />
            )
          )}
        </div>
        <Find modalOpener={this.modalOpener} />
        {isModal ? (
          <Modal
            modalCloser={this.modalCloser}
            trackAdder={this.trackAdder}
            redunChecker={this.redunChecker}
          />
        ) : null}
      </div>
    );
  };
}

export default App;
