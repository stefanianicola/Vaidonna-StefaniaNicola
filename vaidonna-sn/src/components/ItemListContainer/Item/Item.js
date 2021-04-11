import React from 'react';
import './Item.scss';
import {  Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ data }) => {
   
    return (

        <Col xs={12} md={4} lg={3} className="p-0">
            <Card className="card listItem">
                <div className="imgProduct" >
                    <Card.Img variant="top" src={data.image} />
                </div>

                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text className="descriptProduct">
                        {data.description}
                    </Card.Text>
                    <Card.Text className="price">
                        {data.price}
                    </Card.Text>
                </Card.Body>
                <ItemCount />
            </Card>
        </Col>

    )
}

export default Item;
