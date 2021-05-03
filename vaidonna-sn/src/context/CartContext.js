import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    const addList = (id, name, img, quantity, price) => {
        let aux = list;
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
                nombre: name,
                img: img,
                count: quantity,
                precio: price
            }]);

    }

    const clear = () => {
        setList([]);
        setItem(0);
    }

    const removeItem = (id) => {
        let aux = list;
        console.log(id);
        if(aux.length > 0){
            setList(aux.find((a)=>a.id !== id ))
        } else {
            setList([]);
        }      
    }

    const totalCompra = () => {
       let aux = list;
       let items = 0;
       let suma = 0;

       aux = list;
        aux.forEach((a) => {
            if (a.count > 1) {
                suma = suma + (a.precio * a.count);
                items = items + a.count
            } else {
                suma = suma + a.precio;
                items = items + a.count
            }
        })
        setTotal(Number(suma));
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