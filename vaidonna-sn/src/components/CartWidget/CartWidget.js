import React, { useContext } from 'react';
import '../../assets/img/bg.jpeg'
import './CartWidget.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function CardWidget() {
    const { item } = useContext(CartContext);

    return (
        <div>
            {
                item > 0 && (
                    <Link to="/cart">
                        <i className="fa fa-shopping-cart" aria-hidden="true">
                            <span>{item}</span>
                        </i>
                    </Link>
                )
            }

        </div>
    )

}


export default CardWidget;