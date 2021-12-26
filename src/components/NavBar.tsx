import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => (
  <Navbar bg="light" expand="lg" collapseOnSelect={true}>
    <Container>
      <Link className="navbar-brand" to="/">Zaliczenie SPA</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Lista zadań</Link>
          <Link className="nav-link" to="/modify-list">Edytuj listę</Link>
          <Link className="nav-link" to="/about">O mnie</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavBar;