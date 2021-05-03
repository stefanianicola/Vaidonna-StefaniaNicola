import ItemList from './ItemList/ItemList'
import './ItemListContainer.scss';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';  
import {useParams} from 'react-router-dom';
  

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const { categoria } = useParams();

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
    }, [categoria]);
    
    
    return (
        
        <div className="wrapper-list">
            <h3 className="title-section">{props.greeting}</h3>
            <ItemList items={products} />
        </div>
    );
}


export default ItemListContainer;