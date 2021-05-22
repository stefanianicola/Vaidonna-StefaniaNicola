import { useState, useEffect, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import Loading from '../Loading/Loading';
import { db } from '../../firebase';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer({ match }) {
  const { loading, setLoading } = useContext(CartContext);
    const [dataDet, setDataDet] = useState({});

    useEffect(() => {
      const getData = async () => {
          const { docs } = await db.collection("items").get();
          const data = docs.map((item) => ({ id: item.id, ...item.data() }));
          data.forEach(element => {
            if(element.id === match.params.id && element.categoria === match.params.categoria){
              setLoading(true);
              setDataDet(element);
            }
          });
          
          
      }  
      getData();
      setLoading(false);
    }, [match.params.id , match.params.categoria]);


    return (
        <div>
          {
            loading ? (<ItemDetail  data={dataDet}/> )
                    : (<Loading/>)
          }
            
        </div>
    )
}

export default ItemDetailContainer;