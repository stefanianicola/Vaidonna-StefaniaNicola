import '../../assets/img/bg.jpeg'
import './CardWidget.scss';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function CardWidget(props) {

    return (
        <div>
            <Nav.Link href="#home">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </Nav.Link>
        </div>
    )

}


export default CardWidget;