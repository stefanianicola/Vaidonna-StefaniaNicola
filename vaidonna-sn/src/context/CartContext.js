import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    

    const addList = (id, name, img, quantity, price) => {
        let isInCart = false;
        let aux = list;

        aux.forEach((a) => {
            if (a.id === id) {
                isInCart = true;
                a.count = a.count + quantity
                setList(aux);
            }
        })
        !isInCart &&
        setList([...aux, { id: id, user: name, webformatURL: img, count: quantity, previewWidth: price }]);

    }

    const clear = () => {
        setList([]);
    }

    const totalCompra = ()=>{
        let aux = list;
        let  suma = 0;
        aux.forEach((a)=>{
            if(a.count > 1){
             suma = suma + (a.previewWidth * a.count);
            } else {
                suma = suma + a.previewWidth;
            }
           
            
        })
        setTotal(suma);
        
    }
    
    console.log(total);

    return <CartContext.Provider

        value={{
            list,
            addList,
            clear,
            totalCompra,
            total
        }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;