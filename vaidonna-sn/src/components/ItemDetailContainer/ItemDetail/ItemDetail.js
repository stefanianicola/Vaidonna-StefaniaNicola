import { React, useState } from 'react';
import './ItemDetail.scss';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';

const ItemDetail = ({ data }) => {
    const [cart, setCart] = useState(false);

    const onAdd = (count) => {
        console.log('hay', count);
        setCart(true)
    }

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
                        {
                            cart ? <Link to="/cart" className="btn btn-success">
                                            Terminar Compra
                                    </Link>

                                : <ItemCount onAdd={onAdd} />
                        }

                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default ItemDetail;
