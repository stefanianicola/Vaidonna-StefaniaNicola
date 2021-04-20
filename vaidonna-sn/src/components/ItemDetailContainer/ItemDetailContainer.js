import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer({ match }) {
    const [dataDet, setDataDet] = useState({});

    useEffect(() => {
      axios(`https://pixabay.com/api/?key=21182105-58e15b2d4fdeee759fc75e368&q=${match.params.name}&image_type=photo&id=${match.params.id}`)
      .then((res) => (
          res.data.hits.map((d)=>( 
            setDataDet(d)
          ))
       
      ));
    }, [match.params.name,match.params.id])


    return (
        <div>
            <ItemDetail  data={dataDet}/> 
        </div>
    )
}

export default ItemDetailContainer;