import ItemList from './ItemList/ItemList'
import './ItemListContainer.scss';
import { useContext, useEffect, useState } from 'react';
import Loading  from '../Loading/Loading';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


function ItemListContainer(props) {
    const { loading, setLoading } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const getData = async () => {
            const { docs } = await db.collection("items").get();
            const data = docs.map((item) => ({ id: item.id, ...item.data() }));
            if (categoria === undefined) {
                setLoading(true);
                setProducts(data);
            } else {
                setLoading(true);
                setProducts(data.filter(e => e.categoria === categoria));
            }
        }
        getData();
        // eslint-disable-next-line
    }, [categoria]);
    


    return (

        <div className="wrapper-list">
            <h3 className="title-section">{props.greeting}</h3>
            {
                loading ? (<ItemList items={products} />)
                    : (
                        <Loading />
                    )
            }

        </div>
    );
}


export default ItemListContainer;