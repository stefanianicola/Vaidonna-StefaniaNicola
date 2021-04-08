import React from 'react';
import './Item.scss';
import {  Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ data }) => {
   
    return (

        <div>
            <Card className="card">
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
        </div>

    )
}

export default Item;
