import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer({ match }) {
    const [dataDet, setDataDet] = useState({});

    useEffect(() => {
      const getData = async () => {
          const { docs } = await db.collection("items").get();
          const data = docs.map((item) => ({ id: item.id, ...item.data() }));
          data.forEach(element => {
            if(element.id === match.params.id && element.categoria === match.params.categoria){
              setDataDet(element);
            }
          });
          
          
      }  
      getData();
    }, [match.params.id , match.params.categoria]);


    return (
        <div>
            <ItemDetail  data={dataDet}/> 
        </div>
    )
}

export default ItemDetailContainer;