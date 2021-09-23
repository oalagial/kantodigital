import React, { Component } from "react";
import ReactDOM from "react-dom";
// import styled, { createGlobalStyle } from "styled-components";

import "./App.css";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";




class App extends Component {
  render() {
    return (
      <div className="scroll-container">
        <div className="d-flex">
        <Navbar className="navbar d-flex justify-content-between" collapseOnSelect expand="lg" variant="light">
        {/* <Container> */}
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{flexGrow: `0`}} id="responsive-navbar-nav">
            <Nav className="me-auto font-weight-bold">
              <Nav.Link className="" href="#home">HOME</Nav.Link>
              {/* <Nav.Link className="" href="#about">ABOUT</Nav.Link> */}
              <Nav.Link href="#services">SERVICES</Nav.Link>
              {/* <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link> */}
              {/* <Nav.Link href="#team">TEAM</Nav.Link> */}
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>


      
        </div>
        <div>
      <section id="home">
        <Home></Home>
      </section>
      <section id="services">
        <Services></Services>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
