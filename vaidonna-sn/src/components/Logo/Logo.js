import '../../assets/img/logo192.png';
import './Logo.scss';
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logo(props) {

  return (
    <Link to="/">
    <Navbar.Brand name="Vaidonna">
      <div>
        <img
          src={props.url}
          width="75"
          height="75"
          className="d-inline-block align-top mr-2 logo"
          alt="Vaidonna logo"
        />
      </div>
      <div>
        <h1 className="title">
          {props.name}
        </h1>
      </div>
    </Navbar.Brand>
    </Link>
  );
}


export default Logo;