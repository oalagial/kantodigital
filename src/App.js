import React, { Component } from "react";
import ReactDOM from "react-dom";
// import styled, { createGlobalStyle } from "styled-components";

import "./App.css";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ReactSnapScroll from 'react-snap-scroll';

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";




class App extends Component {
  render() {
    return (
      <div className="scroll-container">
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <div>
        <section id="home">
        <h3>Hi there, I'm Orestis 👋</h3>
        <h2>FullStack developer</h2>
        <p>
          I help people and brands reach their goals by building user-centric
          digital products and interactive experiences
        </p>
        <div className="d-flex">
          <a href="#portfolio">
            <button type="button" className="btn btn-primary">
              View my work
            </button>
          </a>
          <a href="#contact" className="ml-3">
            <button type="button" className="btn btn-link">
              More About me...
            </button>
          </a>
        </div>
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
