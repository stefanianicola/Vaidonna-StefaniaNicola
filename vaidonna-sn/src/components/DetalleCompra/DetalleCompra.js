import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './DetalleCompra.scss';
import { db } from "../../firebase";


const DetalleCompra = () => {
    const [compra, setCompra] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { docs } = await db.collection("compra").get();
            const data = docs.map((compra) => ({ id: compra.id, ...compra.data() }));
            data.forEach((d) => {
                if(d.nombre === 'stefania'){
                    setCompra(data);
                }
                
            })
            

        }
        getData();
    }, []);
    console.log(compra)
    return (
        <div className="detalle">
         
                        <p>Numero de compra:{compra.id}</p>
                        <p>Nombre {compra.nombre}</p>
                        <p>Correo {compra.email}</p>
                        <p>Telefono {compra.telefono}</p>
                 
         

            <p></p>
        </div>
    )
}
export default DetalleCompra;