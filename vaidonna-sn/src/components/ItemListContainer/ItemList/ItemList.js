import { React, useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemList.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useParams } from 'react-router';


function ItemList(props) {
    const [items, setItems] = useState([]);
    // let { categoria } = useParams();


    useEffect(() => {
        setItems(props.items)
    }, [props]);


    return (
        <Container fluid>
            <div>
                <Row>
                    {
                        items &&
                        items.map((d, index) => (
                            <Col xs={12} md={4} lg={3} className="p-0" key={d.id}>
                                <Item data={d} key={index} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>

    )

}


export default ItemList;
