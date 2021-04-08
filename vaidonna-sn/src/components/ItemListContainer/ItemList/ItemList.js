import { Component, React } from 'react';
import { Data } from '../../../Data/Data';
import Item from '../Item/Item';
import './ItemList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ItemList extends Component {
    constructor() {
        super();

        this.state = {
            productos: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                productos: Data,
            });
        }, 2000);
    }

    render() {
        return (

            <div className="wrapperCard justify-content-center">
                {this.state.productos.map((data) => {
                    return <Item data={data} key={data.id} />
                })}
            </div>


        )

    }

}
