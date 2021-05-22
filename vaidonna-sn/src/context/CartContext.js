import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0); 
    const [date, setDate] = useState();
    const [loading, setLoading] = useState(false); 

    useEffect(()=> {
        let today = new Date();
        today =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
        setDate(today);
        }, [])

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
        let dataAux = [...list];
        let items = item;
        let suma = total;
        for (let i = 0; i < list.length; i++) {
            if (id === list[i].id) {
                dataAux.splice(i, 1);
                items = items - list[i].count;
                suma = Number(suma - (list[i].precio * list[i].count));
                setItem(items);
                setTotal(Number(suma));
            }
        }

        setList(dataAux);
        // totalCompra();

    }

    const totalCompra = () => {
        let aux = [...list];
        let suma = 0;

        aux.forEach((a) => {
            if (a.count > 1) {
                suma = Number(suma) + (Number(a.precio) * Number(a.count));
                
            } else {
                suma = Number(suma) + Number(a.precio);
            }
        })
        
        setTotal(Number(suma));
        addItems();
    }

    const addItems = () => {
        let aux = [...list];
        let items = 0;

        aux.forEach((a) => {
            if (a.count > 1) {
                items = items + a.count
            } else {
                items = items + a.count
            }
        })
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
            item,
            setItem,
            date,
            loading,
            setLoading
        }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;