import { Link } from "react-router-dom";
import { useCart } from "../Context.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const { cart } = useCart(); 

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Context Shopping App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home Page</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart ({cart.length})</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
