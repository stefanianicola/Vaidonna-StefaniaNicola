import './Navb.scss';
import '../../assets/img/logo192.png'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// COMPONENTS
import Logo from '../Logo/Logo'
import CardWidget from '../CartWidget/CartWidget'

function Navb() {
  return (
    <Navbar expand="lg">
      <Logo name="Vaidonna" url="/logo192.png" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Gatos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
          </NavDropdown>
          <CardWidget />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navb;