import { React, useState, useEffect } from 'react';
import { db } from '../../../firebase';
import Item from '../Item/Item';
import './ItemList.scss';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';


function ItemList() {
    const [products, setProducts] = useState([]);
    let { categoria } = useParams();


    useEffect(() => {
        const getData = async () => {
            const { docs } = await db.collection("items").get();
            const data = docs.map((item) => ({ id: item.id, ...item.data() }));
            if (categoria === undefined) {
                setProducts(data);
            } else {
                setProducts(data.filter(e => e.categoria === categoria));
            }
        }
        getData();
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
