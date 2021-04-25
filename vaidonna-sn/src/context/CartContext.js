import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [list, setList] = useState([]);

    const addList = (id, name, img, quantity) => {
        setList({id: id, user: name, webformatURL: img, count: quantity })    
    }

    //console.log(list)
    return <CartContext.Provider
    
        value={{
            list,
            addList
        }}>
        { props.children }
    </CartContext.Provider>
}

export default CartContextProvider;