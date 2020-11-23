import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  state = {
    contact: [
      {
        id: 1,
        nom: "Salim",
        tel: "1111111111",
        mail: "slim@xyz.fr",
      },
      {
        id: 2,
        nom: "Sarah",
        tel: "2222222222",
        mail: "srah@xyz.fr",
      },
      {
        id: 3,
        nom: "Sana",
        tel: "3333333333",
        mail: "sana@xyz.fr",
      },
    ],
  };

  deleteContact = (id) => {
    let newContact = this.state.contact.filter((el) => el.id !== id);
    this.setState({ contact: newContact });
  };

  render() {
    return (
      <div>
        {this.state.contact.map((el) => (
          <Contact
            key={el.id}
            nom={el.nom}
            mail={el.mail}
            tel={el.tel}
            deleteClickContact={this.deleteContact.bind(this, el.id)}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
