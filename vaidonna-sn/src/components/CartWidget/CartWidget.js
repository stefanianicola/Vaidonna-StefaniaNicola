import '../../assets/img/bg.jpeg'
import './CartWidget.scss';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function CardWidget(props) {

    return (
        <div>
            <Link to="/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Link>
        </div>
    )

}


export default CardWidget;