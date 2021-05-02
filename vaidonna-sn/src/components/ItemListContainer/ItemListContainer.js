import ItemList from './ItemList/ItemList'
import './ItemListContainer.scss';
import {useParams} from 'react-router-dom';
  

function ItemListContainer(props) {
    const { categoria } = useParams();
    console.log(categoria)
    
    
    return (
        
        <div className="wrapper-list">
            <h3 className="title-section">{props.greeting}</h3>
            <ItemList />
        </div>
    );
}


export default ItemListContainer;