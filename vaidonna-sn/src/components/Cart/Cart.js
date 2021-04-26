import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Row, Col } from 'react-bootstrap';
import './Cart.scss';

export default function Cart() {
    const { list } = useContext(CartContext);

    return (
        <div className="carro ">
            <h4>Compra Pendiente de confirmación</h4>
            <div className="listItem ">
                {
                    list.map((l) => (
                        <Row key={l.id} className="wrap-item m-0 p-0">
                            <p> Nombre de Producto {l.user}</p>
                            <div className="item d-flex">
                                <Col xs={6}>
                                    <img
                                        src={l.webformatURL}
                                        alt=""
                                    />
                                </Col>
                                <Col xs={6}>
                                    <p>Cantidad: {l.count}</p>
                                    <p>Total ARS {l.previewWidth * l.count}</p>
                                </Col>
                            </div>
                        </Row>
                    ))
                }
            </div>
        </div>
    )
}
