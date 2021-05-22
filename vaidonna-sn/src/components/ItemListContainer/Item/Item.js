import React from 'react';
import './Item.scss';
import { Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';
//ROUTES
import { Link } from 'react-router-dom';

const Item = ({ data }) => {


    return (
        <div className="listItem">
            <Card className="card card-item">
                <div className="imgProduct" >
                    <Image variant="top" src={data.img} fluid />
                </div>
                <Card.Body>
                    <Card.Title>{data.nombre}</Card.Title>
                    <Card.Text className="descriptProduct">
                        {data.descripcion}
                    </Card.Text>
                    <Card.Text className="price">
                        <NumberFormat value={data.precio}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'} />
                    </Card.Text>
                </Card.Body>
                <Link to={`/${data.categoria}/${data.id}`}>
                    <Button className="col-8 offset-2" variant="outline-secondary">Ver más</Button>
                </Link>
            </Card>
        </div>
    )
}

export default Item;
