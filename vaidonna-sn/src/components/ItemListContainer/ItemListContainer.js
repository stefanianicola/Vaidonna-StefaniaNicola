import ItemList from './ItemList/ItemList'
import './ItemListContainer.scss';

function ItemListContainer(props) {

    return (
        <div className="wrapper-list">
            <h3 className="title-section">{props.greetings}</h3>
            <ItemList />
        </div>
    );
}


export default ItemListContainer;