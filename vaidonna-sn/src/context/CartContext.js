import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    let aux = list;

    const addList = (id, name, img, quantity, price) => {
        let isInCart = false;

        aux.forEach((a) => {
            if (a.id === id) {
                isInCart = true;
                a.count = a.count + quantity
                setList(aux);
            }
        })
        !isInCart &&
            setList([...aux,
            {
                id: id,
                user: name,
                webformatURL: img,
                count: quantity,
                previewWidth: price
            }]);

    }

    const clear = () => {
        setList([]);
        setItem(0);
    }

    const removeItem = (id) => {
        aux.filter((a)=>a.id === id )
        alert(`remover ${id}`);
    }

    const totalCompra = () => {
        let suma = 0;
        let items = 0;
        aux.forEach((a) => {
            if (a.count > 1) {
                suma = suma + (a.previewWidth * a.count);
                items = items + a.count
            } else {
                suma = suma + a.previewWidth;
                items = items + a.count
            }
        })
        setTotal(suma);
        setItem(items)
    }


    return <CartContext.Provider

        value={{
            list,
            addList,
            clear,
            totalCompra,
            total,
            removeItem,
            item
        }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;