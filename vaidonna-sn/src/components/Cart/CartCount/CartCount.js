import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Row, Button} from 'react-bootstrap';

const CartCounter = ({props}) => {

    // const [counter, setCounter] = useState(0);
    const { list, setList } = useContext(CartContext);

    const handleIncrement = () => {
        console.log('crece')
        // setCounter(counter + 1);
    };

    const handleDecrement = () => {
        console.log('decrese')
        // if (counter > 0) {
        //     setCounter(counter - 1);
        // } else {
        //     alert('No hay productos seleccionados');
        // }
    };

    // const handlerOnAdd = () => {
    //    onAdd(count);
    // }

    return (
        <div className="Count-container">
            <Row className="justify-content-center inc-container">
                <Button variant="secondary" className="btn" onClick={handleIncrement}>
                    +
                </Button>
                <p>{props.cont}</p>
                <Button variant="secondary" className="btn" onClick={handleDecrement}>
                    -
                </Button>
            </Row>
        </div>

    )
}
export default CartCounter;