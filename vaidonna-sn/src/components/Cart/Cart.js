import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Cart.scss';


export default function Cart() {
    const { list, clear, total } = useContext(CartContext);

    return (
        <div className="carro ">
            <h4>Compra Pendiente de confirmación</h4>
            <div className="listItem ">
                <Row>
                    {
                        list.map((l) => (

                            <Col xs={12} md={4} className="p-0" key={l.id}>
                          
                                    <Card className="card">
                                        <div >
                                            <Card.Img variant="top" src={l.webformatURL} />
                                        </div>

                                        <Card.Body>
                                            <Card.Title>{l.user}</Card.Title>
                                            <Card.Text className="price">
                                            Total producto ARS {l.previewWidth * l.count}
                                            </Card.Text>
                                        </Card.Body>
                                        
                                    </Card>
                               
                            </Col>
                        ))
                    }
                    
                </Row>
                
            </div>
            <p>Total de tu compra {total}</p>
            <Button variant="danger" onClick={clear}>Cancelar compra</Button>
        </div>
    )
}
