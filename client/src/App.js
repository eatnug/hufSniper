import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentDidMount = async () => {
    const { data } = await axios.get("http://127.0.0.1:4000/test");
    this.setState({ loaded: true, data });
  };

  render = () => {
    const { loaded, data } = this.state;
    if (!loaded) return <div>loading ...</div>;
    else return <div>{data}</div>;
  };
}

export default App;
