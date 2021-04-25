import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';
import { Card, Row, Col } from 'react-bootstrap';
import './Cart.scss';

export default function Cart() {
    const { list } = useContext(CartContext);

    return (
        <div className="carro">
            <h4>Compra Pendiente de confirmación</h4>
            <Card>
                <h4 className="text-center">{list.user}</h4>
                <Row>
                    <Col md={{ span: 3, offset: 1 }}>
                        <Card.Img
                            variant="top"
                            src={list.webformatURL}
                        />
                    </Col>
                    <Col md={{ span: 4, offset: 2 }}>
                        <Card.Body>
                            <Card.Text>
                                Cantidad {list.count}
                            </Card.Text>
                        </Card.Body>
                        
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
