import React, {  useState } from 'react';
import './DetalleCompra.scss';
import { db } from '../../firebase';


const DetalleCompra = () => {
    // const { list, total } = useContext(CartContext);
    const [email, setEmail] = useState();
    const [compras, setCompras] = useState([]);
    const [items, setItems] = useState([]);
    const [flagMail, setFlagMail] = useState(false)

    const handleChange = (e) => {
        let mail = e.target.value;
        setEmail(mail);
    }

    const validateEmail = async (email) => {
        const { docs } = await db.collection("compra").get();
        const data = docs.map((item) => ({ id: item.id, ...item.data() }));
        data.forEach((d) => {
            if (d.email === email) {
                setFlagMail(true);
                setCompras(d);
                setItems(d.list);
            } 

        })
    }


    return (
        <div className="detalle">

            <input type="email"
                placeholder="ingrse el mail con el que hizo la compra"
                onChange={handleChange}></input>
            <button onClick={() => { validateEmail(email) }}>Enviar</button>

            {
                flagMail ? (
                    <div>
                        <p>Numero de compra:{compras.id}</p>
                        <p>Nombre {compras.nombre}</p>
                        <p>Correo {compras.email}</p>
                        <p>Telefono {compras.telefono}</p>
                        <div> Detalle de Compra:
                             {
                                items.map((l) => {
                                    return (
                                        <div key={l.id}>
                                            <p>Producto: {l.nombre}</p>
                                            <p>Cantidad: {l.count}</p>
                                            <p>Precio: {l.precio * l.count}</p>
                                        </div>
                                    )
                                })
                            }
                            <p>TOTAL COMPRA: {compras.total}</p>
                        </div>
                    </div>

                )
                    : (
                        <div>
                            NO HAY NADA
                        </div>
                    )
            }
        </div>
    )
}
export default DetalleCompra;