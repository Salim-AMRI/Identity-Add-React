import React, { Component } from "react";

export default class ContactInput extends Component {
  state = {
    nom: "",
    mail: "",
    tel: "",
    tab: [],
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      nom: "",
      mail: "",
      tel: "",
      tab: [
        ...this.state.tab,
        { nom: this.state.nom, mail: this.state.mail, tel: this.state.tel },
      ],
      //push au lieu de tab
    });
  };

  renderCard = () => {
    return this.state.tab.map((tab, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-body">
            <h2>{tab.nom}</h2>
            <p>{tab.tel}</p>
            <p>{tab.mail}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="card my-3">
          <div className="card-header">Ajouter un contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  className="form-control form-control-1g"
                  name="nom"
                  onChange={this.onChange}
                  value={this.state.nom}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nom">Mail</label>
                <input
                  type="text"
                  className="form-control form-control-1g"
                  name="mail"
                  onChange={this.onChange}
                  value={this.state.mail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nom">Tel</label>
                <input
                  type="text"
                  className="form-control form-control-1g"
                  name="tel"
                  onChange={this.onChange}
                  value={this.state.tel}
                />
              </div>
              <button className="btn btn-primary btn-block">
                Créer Contact
              </button>
            </form>
          </div>
        </div>
        {this.renderCard()}
      </div>
    );
  }
}
