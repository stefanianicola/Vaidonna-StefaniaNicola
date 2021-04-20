import React from 'react';
import './Item.scss';
import { Col, Card, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//ROUTES
import {Link, useParams} from 'react-router-dom';

const Item = ({ data }) => {

    let{name}=useParams();
    if(name === undefined){
        name = "animals"
      }
    
    return (
        <Row>
            {
                data.map((d) => (
                    <Col xs={12} md={4} lg={3} className="p-0" key={d.id}>
                        <Link to={`${name}/${d.id}`} className="listItem">
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
                                <Button className="col-8 offset-2" variant="outline-secondary">Agregar al carrito</Button>
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Item;
