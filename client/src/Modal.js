import React from "react";
import "./Modal.css";
class Modal extends React.Component {
    constructor(props){
        super(props)
        this.changeHandler = this.handleChange.bind(this)
        this.state = {
            tab_lang:"K",
            ag_ledg_year: "",
            ag_ledg_sessn:"",
            ag_org_sect:"",
            campus_sect:"",
            ag_crs_strct_cd:"",
            ag_compt_fld_cd:"",
            course_number:"",
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }
  render() {
    const { modalCloser } = this.props;
    return (
      <div className="modal">
        <div className="form__container">
            {Object.keys(this.state).slice(1).map(c=>(<label key={c}>
                {c}<input id={c}type="text" value={this.state[c]} onChange={this.changeHandler}></input><br></br>
            </label>))}
        </div>
        <button className="modal__closer" onClick={modalCloser}>
          Close
        </button>
      </div>
    );
  }
}

export default Modal;
