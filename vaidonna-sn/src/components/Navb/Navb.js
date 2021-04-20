import './Navb.scss';
import '../../assets/img/logo192.png'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
// COMPONENTS
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

function Navb() {
  return (

    <Router>
      <Navbar expand="lg">
        <Logo name="Vaidonna" url="/logo192.png" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/dog">Perros</NavDropdown.Item>
              <NavDropdown.Item href="/category/cat">Gatos</NavDropdown.Item>
              <NavDropdown.Item href="/category/animals">Todos los Productos</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>

  );
}

export default Navb;