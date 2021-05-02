import React from 'react';
import './Item.scss';
import { Col, Card, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';
//ROUTES
import {Link} from 'react-router-dom';

const Item = ({ data }) => {
    
    return (
        <Row>
            {
                data.map((d) => (
                    <Col xs={12} md={4} lg={3} className="p-0" key={d.id}>
                        <Link to={`/${d.categoria}/${d.id}`} className="listItem">
                            <Card className="card card-item">
                                <div className="imgProduct" >
                                    <Card.Img variant="top" src={d.img} />
                                </div>

                                <Card.Body>
                                    <Card.Title>{d.nombre}</Card.Title>
                                    <Card.Text className="descriptProduct">
                                        {d.descripcion}
                                    </Card.Text>
                                    <Card.Text className="price">
                                    <NumberFormat value={d.precio}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'} />
                                    </Card.Text>
                                </Card.Body>
                                <Button className="col-8 offset-2" variant="outline-secondary">Ver más</Button>
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Item;
