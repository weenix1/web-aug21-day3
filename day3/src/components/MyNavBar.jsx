import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavBar = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    className="main-navbar"
    sticky="top"
    variant="dark"
  >
    <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="active" href="#features">
          Home
        </Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#browse">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavBar;
