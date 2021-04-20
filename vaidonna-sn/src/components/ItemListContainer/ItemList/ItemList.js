import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../Item/Item';
import './ItemList.scss';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';


function ItemList({match}) {
    const [products, setProducts] = useState([]);
    let {name} = useParams();
    if(name === undefined){
        name = "animals"
      }

    useEffect(() => {
        axios(`https://pixabay.com/api/?key=21182105-58e15b2d4fdeee759fc75e368&q=${name}&image_type=photo`)
        .then((res) =>
            setProducts(res.data.hits));          
    }, [name]);

    return (
        <Container fluid>
            <div>
                <Item data={products} key={products.id} />        
            </div>
        </Container>

    )

}


export default ItemList;
