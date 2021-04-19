import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../Item/Item';
import './ItemList.scss';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios(`https://pixabay.com/api/?key=21182105-58e15b2d4fdeee759fc75e368&q=dog&image_type=photo`).then((res) =>
            //console.log(res.data.hits));
            setProducts(res.data.hits));

    }, []);



    return (
        <Container fluid>
            <div>
                <Item data={products} key={products.id} />      
            </div>
        </Container>

    )

}


export default ItemList;
