import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Row, Col, Card, Button, Alert } from 'react-bootstrap';
import './Cart.scss';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom';
 


export default function Cart() {
    const { list, clear, total, removeItem } = useContext(CartContext);


    return (
        <div className="carro ">

            <div className="listItem ">
                {
                    list.length > 0 ? (
                        <div>
                            <h4>Compra Pendiente de confirmación</h4>

                            {
                                list.map((l) => (
                                    // <Row className="m-0 p-0 wrap-item">
                                    <Col xs={12} className="p-0" key={l.id}>

                                        <Card className="card" >
                                            <Row>
                                                <Col xs={3}>
                                                    <Card.Img src={l.img} />
                                                </Col>
                                                <Col xs={8}>
                                                    <Card.Body>
                                                        <Card.Title>{l.nombre}</Card.Title>
                                                        <Card.Text>Cantidad: {l.count}</Card.Text>
                                                        <Card.Text className="price">
                                                            <NumberFormat value={l.precio * l.count.toFixed(2)}
                                                                displayType={'text'}
                                                                thousandSeparator={true}
                                                                prefix={'$'} />
                                                        </Card.Text>
                                                    </Card.Body>
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

                                        </Card>
                                    </Col>
                                    // </Row>
                                ))}
                            <Row className="m-0 p-0">

                                <p>Total de tu compra:</p>
                                <NumberFormat value={total.toFixed(2)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'} />
                                <Button variant="danger" onClick={clear}>Cancelar compra</Button>
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
