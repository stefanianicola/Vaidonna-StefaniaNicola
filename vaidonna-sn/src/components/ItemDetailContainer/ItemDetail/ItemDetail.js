import { React, useState, useContext } from 'react';
import './ItemDetail.scss';
import { Col, Row, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import { CartContext } from '../../../context/CartContext';
import NumberFormat from 'react-number-format';

const ItemDetail = ({ data }) => {
    const { addList, totalCompra } = useContext(CartContext);
    const [cart, setCart] = useState(false);

    //agrega item al carro
    const onAdd = (count) => {
        setCart(true);
        addList(data.id, data.nombre, data.img, count, data.precio);
    }

    const handleBack = () => {
        setCart(false);
    }

    return (
        <div className="detailProduct">
            <div className="itemDetail">
                <h4 className="text-center">{data.nombre}</h4>
                <hr/>
                <Row className="rowDetail">
                    <Col md={{ span: 6, offset: 1 }}>
                        <Image
                            variant="top"
                            src={data.img}
                            fluid
                        />
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>
                        <div>
                            <div className="descriptionDetail">
                                {data.descripcion}
                            </div>
                            <div className="priceDetail">
                                <NumberFormat value={data.precio}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'} />

                            </div>
                        </div>
                        {
                            cart ? <div className="irCarro">
                                <Link to="/cart" className="btn btn-success" onClick={totalCompra}>
                                    Ir al carrito
                                </Link>
                                <Button variant="link" onClick={handleBack}>Cancelar</Button>
                            </div>



                                : <ItemCount onAdd={onAdd} />
                        }

                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default ItemDetail;
