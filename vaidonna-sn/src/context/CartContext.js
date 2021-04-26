import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [list, setList] = useState([]);

    const addList = (id, name, img, quantity, price) => {
        
        setList([...list,{id: id, user: name, webformatURL: img, count: quantity, previewWidth: price}])  
        
      
    }



    console.log(list)
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