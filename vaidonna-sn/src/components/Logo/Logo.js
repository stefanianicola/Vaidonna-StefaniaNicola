import '../../assets/img/logo192.png';
import './Logo.scss';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logo(props) {

  return (
    <Navbar.Brand href="#home" name="Vaidonna">
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
  );
}


export default Logo;