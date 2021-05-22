import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Row, Col, Image, Button, Alert } from 'react-bootstrap';
import './Cart.scss';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { list, clear, total, removeItem } = useContext(CartContext);



    return (
        <div className="carro ">

            <div className="listItem ">
                {
                    list.length > 0 ? (
                        <div>
                            <h4>Compra Pendiente de confirmación</h4>
                            <hr />
                            {
                                list.map((l) => (
                                    <Col xs={12} className="p-0" key={l.id}>

                                        <div className="card-cart" >
                                            <Row className="m-0 p-0">
                                                <Col xs={3}>
                                                    <div className="cart-img">
                                                        <Image src={l.img} fluid />
                                                    </div>
                                                </Col>
                                                <Col xs={8}>
                                                    <div>
                                                        <h3>{l.nombre}</h3>
                                                        <Row className="cart-desc m-0 p-0">
                                                            <Col xs={5}>
                                                                <p>Cantidad: {l.count}</p>
                                                            </Col>
                                                            <Col xs={6}>
                                                                <div className="price">
                                                                    <NumberFormat value={l.precio * l.count.toFixed(2)}
                                                                        displayType={'text'}
                                                                        thousandSeparator={true}
                                                                        prefix={'$'} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={1}>
                                                                <div>
                                                                    <Button variant="danger"
                                                                        onClick={() => { removeItem(l.id) }}>
                                                                        <i className="fa fa-trash"
                                                                            aria-hidden="true"></i>
                                                                    </Button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                            </Row>

                                        </div>
                                    </Col>
                                ))}
                            <Row className="m-0 p-0">
                                <Col xs={6}>
                                    <p>Total de tu compra: 
                                    <NumberFormat value={total.toFixed(2)}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'} />
                                        </p>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="link" onClick={clear}>Cancelar compra</Button>
                                    <Link to="/compra">
                                        <Button variant="success">Terminar compra</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>

                    ) : (
                        <div>
                            <Alert variant="primary">
                                No tienes elementos en el carrito!!
                             </Alert>
                            <Link to="/">
                                <Button variant="link">Volver al inicio</Button>
                            </Link>
                        </div>
                    )


                }



            </div>

        </div >
    )
}
