import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { withAuth } from "@okta/okta-react";
import { Jumbotron, Container } from "react-bootstrap";
import "./style.css";
const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");

class Portal extends Component {
  // state = { authenticated: null };

  constructor(props) {
    super(props);
    // this.state = { authenticated: null };
    // this.checkAuthentication = this.checkAuthentication.bind(this);
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  render() {
    const mainContent = (
      <div>
        <p className="lead">
          Welcome, {firstName} {lastName}
        </p>
        <br /> <p>You, have entered the member portal</p>
        <button className="btn btn-success btn-lg" onClick={this.logout}>
          Logout
        </button>
      </div>
    );

    return (
      <Jumbotron fluid>
        <Container fluid>
          <h1>DONATE NOW</h1>
          <p>{mainContent}</p>
        </Container>
      </Jumbotron>
    );
  }
}
export default Portal;
