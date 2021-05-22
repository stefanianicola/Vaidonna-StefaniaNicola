import React, { useState } from 'react';
import { Container, Alert, Row, Col, Button } from 'react-bootstrap';
import './DetalleCompra.scss';
import { db } from '../../firebase';


const DetalleCompra = () => {
    // const { list, total } = useContext(CartContext);
    const [email, setEmail] = useState();
    const [compras, setCompras] = useState([]);
    const [items, setItems] = useState([]);
    const [flagMail, setFlagMail] = useState(true)

    //tomo valor del input para validar mail
    const handleChange = (e) => {
        let mail = e.target.value;
        setEmail(mail);
    }

    //valido el mail con la base de datos
    const validateEmail = async (email) => {
        const { docs } = await db.collection("compra").get();
        let data = docs.map((item) => ({ id: item.id, ...item.data() }));

       data = data.find((d)=> d.email === email)
       if(data){
        setFlagMail(true);
            setCompras(data);
            setItems(data.list);
       } else {
        setFlagMail(false);
       }
    }


    return (
        <Container className="detalle">
            <h3>Detalle de compra</h3>
            <Row className="wrap-validator">
                <Col xs={12}>
                <label>Ingresa tu correo electronico para validar la compra:</label>
                </Col>
                <Col xs={12}>
                <input type="email"
                    placeholder="Ingrese el mail con el que hizo la compra."
                    onChange={handleChange}></input>
                <Button variant="primary" onClick={() => { validateEmail(email) }}>Enviar</Button>
                </Col>
            </Row>

            {
                flagMail ? (
                    <div className="wrap-detalle-completo">
                        <p>Numero de compra: {compras.id}</p>
                        <p>Nombre: {compras.nombre}</p>
                        <p>Correo: {compras.email}</p>
                        <p>Telefono: {compras.telefono}</p>
                        <p>Fecha: {compras.fecha}</p>
                        <div> Detalle de Compra:
                             {
                                items.map((l) => {
                                    return (
                                        <div key={l.id} className="items">
                                            <p>Producto: {l.nombre}</p>
                                            <p>Cantidad: {l.count}</p>
                                            <p>Precio: {l.precio * l.count}</p>
                                        </div>
                                    )
                                })
                            }
                            <p className="items">TOTAL COMPRA: {compras.total}</p>
                        </div>
                    </div>

                )
                    : (
                        <div>
                            <Alert variant="primary">
                                No existe compra relacionada con ese correo electrónico.
                            </Alert>
                        </div>
                    )
            }
        </Container>
    )
}
export default DetalleCompra;