import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './DetalleCompra.scss';
import { Alert } from 'react-bootstrap';
import { db } from '../../firebase';


const DetalleCompra = () => {
    const { list, total } = useContext(CartContext);
    const [email, setEmail] = useState();
    const [compras, setCompras] = useState([]);
    const [flagMail, setFlagMail] = useState(false)

    const handleChange = (e) => {
        let mail = e.target.value;
        setEmail(mail);
    }

    const validateEmail = async (email) => {

        const { docs } = await db.collection("compra").get();
        const data = docs.map((item) => ({ id: item.id, ...item.data() }));
        console.log(data)
        data.forEach((d) => {
            if (d.email === email) {
                setFlagMail(true);
                setCompras(d);
            } else {
                setFlagMail(false);
            }
        })
    }
    console.log(compras);


    return (
        <div className="detalle">

            <input type="email"
                placeholder="ingrse el mail con el que hizo la compra"
                onChange={handleChange}></input>
            <button onClick={() => { validateEmail(email) }}>Enviar</button>

            {
                flagMail ? (<div>
                    <p>Numero de compra:{compras.id}</p>
                    <p>Nombre {compras.nombre}</p>
                    <p>Correo {compras.email}</p>
                    <p>Telefono {compras.telefono}</p>
                    <div> Detalle de Compra:
                        {
                            list.map((l) => {
                                return (
                                    <div key={l.id}>
                                        <p>Producto: {l.nombre}</p>
                                        <p>Precio: {l.precio}</p>
                                    </div>
                                )
                            })
                        }
                        <p>TOTAL COMPRA: {total}</p>
                    </div>
                </div>)
                    : (
                        <Alert variant="primary">
                            No existe el Email ingresado. Intentelo nuevamente.
                        </Alert>
                    )
            }



        </div>
    )
}
export default DetalleCompra;