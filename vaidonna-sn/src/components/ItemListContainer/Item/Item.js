import React from 'react';
import './Item.scss';
import { Col, Card, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//COMPONENTES
import ItemCount from '../../ItemCount/ItemCount';
//ROUTES
import { Link } from 'react-router-dom';

const Item = ({ data }) => {

    return (
        <Row>
            {
                data.map((d) => (
                    <Col xs={12} md={4} lg={3} className="p-0" key={d.id}>
                        <Link className="listItem" to={`productos/${d.id}`}>
                            <Card className="card">
                                <div className="imgProduct" >
                                    <Card.Img variant="top" src={d.webformatURL} />
                                </div>

                                <Card.Body>
                                    <Card.Title>{d.user}</Card.Title>
                                    <Card.Text className="descriptProduct">
                                        {d.tags}
                                    </Card.Text>
                                    <Card.Text className="price">
                                        ARS {d.previewWidth}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="outline-secondary">Agregar al carrito</Button>
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Item;
