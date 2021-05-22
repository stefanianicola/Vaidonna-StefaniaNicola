import React, { useState, useContext } from 'react';
import './FormCompra.scss';
import { CartContext } from '../../../context/CartContext';
import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../../firebase";
import { Link } from 'react-router-dom';
import DetalleCompra  from '../../DetalleCompra/DetalleCompra';

const FormCompra = () => {
    const { list, total, date, item, setItem } = useContext(CartContext);
    const [detalle, setDetalle] = useState(false);
    const [dato, setDato] = useState({
        nombre: '',
        telefono: '',
        email: '',
        fecha: date

    });
   //tomo valor de inputs
    const handleChange = (e) => {
        setDato({
            ...dato,
            [e.target.name]: e.target.value,
            list,
            total
        })
    }
    //envia form con parametros a la bd
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("compra").add(dato)
            setDetalle(true);
            setItem(0);
        } catch (error) {
            console.log(error)
        }

        e.target.reset()
    }

    return (
        <Container className="wrap-form">
            {
                !detalle ? (
                    <div>
                        <h3>Formulario de compra</h3>
                        <span>Por favor completar todos los datos para poder terminar la compra.</span>
                        <form onSubmit={handleSubmit} className="form-compra">
                            <div className="mb-3">
                                <label htmlFor="nombreUsuario" className="form-label">
                                    Nombre
            </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombreUsuario"
                                    placeholder="Nombre"
                                    name="nombre"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefonoUsuario" className="form-label">
                                    Telefono
            </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefonoUsuario"
                                    placeholder="Telefono"
                                    name="telefono"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailUsuario" className="form-label">
                                    Email
            </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emailUsuario"
                                    placeholder="name@example.com"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechaCompra" className="form-label">
                                    Fecha
            </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fechaCompra"
                                    name="fecha"
                                    defaultValue={date}
                                />
                            </div>
                            <div className="mb-3">
                                Detalle de compra:
                    <div>

                                    <Row >
                                        <Col xs={6}>
                                            <p>Producto:</p>
                                            {
                                                list.map((l) => {
                                                    return (
                                                        <div key={l.id}>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-3"
                                                                id="exampleFormControlInput1"
                                                                placeholder="name@example.com"
                                                                name="idProducto"
                                                                value={l.nombre}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Col>
                                        <Col xs={3}>
                                            <p>Cantidad</p>
                                            {
                                                list.map((l) => {
                                                    return (
                                                        <div key={l.id}>
                                                            <input
                                                                type="number"
                                                                className="form-control mb-3"
                                                                id="exampleFormControlInput1"
                                                                placeholder="name@example.com"
                                                                name="precio"
                                                                value={l.count}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }

                                        </Col>
                                        <Col xs={3}>
                                            <p>Precio unitario</p>
                                            {
                                                list.map((l) => {
                                                    return (
                                                        <div key={l.id}>
                                                            <input
                                                                type="number"
                                                                className="form-control mb-3"
                                                                id="exampleFormControlInput1"
                                                                placeholder="name@example.com"
                                                                name="precio"
                                                                value={l.precio}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }

                                        </Col>
                                    </Row>
                                    {
                                        total > 0 && (
                                            <div>
                                                <label htmlFor="totalCompra" className="form-label">
                                                    Total
                                    </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="totalCompra"
                                                    placeholder="name@example.com"
                                                    name="total"
                                                    value={total}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                            <div className="wrap-btn">
                                {
                                    item > 0 && <button type="submit" className="btn btn-success btn-cargar">Comprar</button>
                                }
                                <Link to="/">
                                    <Button variant="link" data-target="#myModal">Volver al Inicio</Button>
                                </Link>
                            </div>
                        </form>

                    </div>
                )
                : (
                    <div>
                        <h3>Tu compra fue realizada correctamente!!</h3>
                        <DetalleCompra/>
                    </div>
                )
            }

        </Container>
    )
}
export default FormCompra;