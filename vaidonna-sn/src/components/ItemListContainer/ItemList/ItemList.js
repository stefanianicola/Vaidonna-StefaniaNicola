import { Component, React } from 'react';
import { Data } from '../../../Data/Data';
import Item from '../Item/Item';
import './ItemList.scss';
import { Container } from 'react-bootstrap';
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
            <Container fluid>
                    <div className="wrapperCard justify-content-center animate__animated animate__fadeIn animate__delay-2s row">
                        {this.state.productos.map((data) => {
                            return <Item data={data} key={data.id} />
                        })}
                    </div>
            </Container>

        )

    }

}
