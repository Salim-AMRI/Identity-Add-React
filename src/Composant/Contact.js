import React, { Component } from "react";

export class Contact extends Component {
  state = {
    show: true,
  };
  /*
  disp = () => {
    this.setState({
      show: !this.state.show,
    });
  };
*/
 /*
onDelete = () => {
    this.props.deleteClickContact();
}
*/

  render() {
    return (
      <div className="card card-body mb-3">
        <h4> <button onClick={() => 
    this.props.deleteClickContact()}>!</button>
          {this.props.nom}&nbsp;{" "}
          <button
            onClick={() =>
              this.setState({
                show: !this.state.show,
              })
            }
          >
            +
          </button>{" "}
        </h4>
        {this.state.show ? (
          <ul className="list-group">
            <li className="list-group-item">mail : {this.props.mail}</li>
            <li className="list-group-item">numero : {this.props.tel}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
