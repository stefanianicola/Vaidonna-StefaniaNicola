import { React, useState, useContext } from 'react';
import './ItemDetail.scss';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import { CartContext } from '../../../context/CartContext';
import NumberFormat from 'react-number-format';

const ItemDetail = ({ data }) => {
    const { addList, totalCompra } = useContext(CartContext);
    const [cart, setCart] = useState(false);

    const onAdd = (count) => {
        setCart(true);
        addList(data.id, data.user, data.webformatURL, count, data.previewWidth);
    }

    const handleBack = () => {
        setCart(false);
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
                                <NumberFormat value={data.previewWidth}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'} />

                            </Card.Text>
                        </Card.Body>
                        {
                            cart ? <div>
                                <Link to="/cart" className="btn btn-success" onClick={totalCompra}>
                                    Terminar Compra
                                        </Link>
                                <Button variant="link" onClick={handleBack}>Cancelar</Button>
                            </div>



                                : <ItemCount onAdd={onAdd} />
                        }

                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default ItemDetail;
