import React, { Component } from "react";
import ReactDOM from "react-dom";
// import styled, { createGlobalStyle } from "styled-components";

import "./App.css";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";




class App extends Component {
  render() {
    return (
      <div className="scroll-container">
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#team">TEAM</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

        <div>
      <section id="home">
        <Home></Home>
      </section>
      <section id="portfolio">
        <Projects></Projects>
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
