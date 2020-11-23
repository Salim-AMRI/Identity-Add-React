import React, { Component } from "react";

export class Jeune extends Component {
  render() {
    return this.props.profil.map((el) => (
      <p key={el.id}>
        {el.nom} {el.age}
      </p>
    ));
  }
}

export default Jeune;
