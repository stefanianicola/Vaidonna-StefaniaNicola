import React from 'react';
import './ItemDetail.scss';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ data }) => {

    return (
        <div className="detailProduct">
            <Card className="itemDetail">
                <h4 className="text-center">{data.user}</h4>
                <Row>
                    <Col md={{ span: 3, offset: 1 }}>
                        <Card.Img
                            variant="top"
                            src={data.webformatURL}
                        />
                    </Col>
                    <Col md={{ span: 4, offset: 2 }}>
                        <Card.Body>
                            <Card.Text>
                                {data.tags}
                            </Card.Text>
                            <Card.Text>
                                ARS {data.previewWidth}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ItemDetail;