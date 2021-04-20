import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer({ match }) {
    const [dataDet, setDataDet] = useState({});
    let {name} = useParams();

    if(name === undefined){
      name = "animals"
    }

    useEffect(() => {
      axios(`https://pixabay.com/api/?key=21182105-58e15b2d4fdeee759fc75e368&q=${name}&image_type=photo&id=${match.params.id}`)
      .then((res) => (
          res.data.hits.map((d)=>( 
            setDataDet(d)
          ))
       
      ));
    }, [name,match.params.id])


    return (
        <div>
            <ItemDetail  data={dataDet}/> 
        </div>
    )
}

export default ItemDetailContainer;