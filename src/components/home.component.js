import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        console.log(response.data);
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <ul>
            <li>Title - Descriptions</li>
          {this.state.content.map(tut => (
            <li>{tut.title}- {tut.description}</li>
          ))}
          {/* <h3>{this.state.content}</h3> */}
          </ul>
        </header>
      </div>
    );
  }
}
