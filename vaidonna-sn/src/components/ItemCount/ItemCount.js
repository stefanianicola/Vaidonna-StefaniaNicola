
import React, { Component } from 'react';
import './ItemCount.scss';
import { Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ItemCount extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        if(this.state.count > 0){
            this.setState({ count: this.state.count - 1 });
        } else {
            alert('No hay productos seleccionados');
        }  
    };

    render() {
        return (
            <div className="Count-container">
                <Row className="justify-content-center inc-container">
                    <Button variant="secondary" className="btn" onClick={this.handleIncrement}>
                        +
                    </Button>
                    <p>{this.state.count}</p>
                    <Button variant="secondary" className="btn" onClick={this.handleDecrement}>
                        -
                    </Button>
                </Row>
                <Button variant="outline-secondary">Agregar al carrito</Button>
            </div>
        );
    }
}