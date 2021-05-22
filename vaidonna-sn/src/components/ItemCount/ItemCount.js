
import React, { useState } from 'react';
import './ItemCount.scss';
import { Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert('No hay productos seleccionados');
        }
    };

    const handlerOnAdd = () => {
       onAdd(count);
    }


    return (
        <div className="Count-container">
            <Row className="justify-content-center inc-container">
                <Button variant="secondary" className="btn" onClick={handleIncrement}>
                    +
                </Button>
                <p>{count}</p>
                <Button variant="secondary" className="btn" onClick={handleDecrement}>
                    -
                </Button>
            </Row>
            {
                count <= 0 ? <Button disabled variant="outline-primary" onClick={onAdd}>Agregar al Carrito</Button>
                        : <Button variant="outline-primary" onClick={handlerOnAdd}>Agregar al Carrito</Button>
            }
            
        </div>
    );

}

export default ItemCount;