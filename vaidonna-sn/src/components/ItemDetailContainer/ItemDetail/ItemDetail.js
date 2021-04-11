import React from 'react';
import './ItemDetail.scss';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ data }) => {
    return (
        <div className="detailProduct">
            {data.map((d) => {
                return (
                    <Card className="itemDetail" key={d.id}>
                        <h4 className="text-center">{d.title}</h4>
                        <Row>
                            <Col md={{ span: 3, offset: 1 }}>
                                <Card.Img
                                    variant="top"
                                    src={d.image}
                                />
                            </Col>
                            <Col md={{ span: 4, offset: 2 }}>
                                <Card.Body>
                                    <Card.Text>
                                        {d.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {d.price}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            })}
        </div>
    )
}

export default ItemDetail;
