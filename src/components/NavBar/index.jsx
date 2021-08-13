import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget"

const NavBar = () => (
    <Navbar bg="light" expand="lg">
      <Container fluid="xl">
        <Navbar.Brand href="#home">Pañalera</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categoria 1</Nav.Link>
            <Nav.Link href="#link">Categoria 2</Nav.Link>
            <Nav.Link href="#link">Categoria 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
);

export default NavBar;
