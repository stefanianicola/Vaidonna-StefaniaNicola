import './Navb.scss';
import '../../assets/img/logo192.png'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
// COMPONENTS
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

function Navb() {
  return (


      <Navbar expand="lg">
        <Logo name="Vaidonna" url="/logo192.png" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to="/category/dog">Perros</Link>
              <Link to="/category/cat">Gatos</Link>
              <Link to="/category/all">Otros</Link>
              <Link to="/detalle">Detalle de Compra</Link>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
 

  );
}

export default Navb;