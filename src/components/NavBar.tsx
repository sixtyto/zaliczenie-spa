import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => (
  <Navbar bg="light" expand="lg" collapseOnSelect={true}>
    <Container>
      <NavLink className="navbar-brand" to="/">
        Zaliczenie SPA
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Lista zadań
          </NavLink>
          <NavLink className="nav-link" to="/edit-list">
            Edytuj listę
          </NavLink>
          <NavLink className="nav-link" to="/about">
            O mnie
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
