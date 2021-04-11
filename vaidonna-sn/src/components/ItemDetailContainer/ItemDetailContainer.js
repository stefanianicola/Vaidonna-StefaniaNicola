import { useState, useEffect } from 'react';
import './ItemDetailContainer.scss';
import ItemDetail from './ItemDetail/ItemDetail';
import { getItems } from '../../Data/Data';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDetailContainer() {
    const [dataDet, setData] = useState([]);

    useEffect(() => {
        getItems.then((res) => {
            setData(res)
        })
    }, [])

    return (
        <div className="wrapperDetail">
            <ItemDetail data={dataDet} />
        </div>
    )
}

export default ItemDetailContainer;