import React, { useState, useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../../../firebase";
import {Link} from 'react-router-dom';

const FormCompra = () => {
    const { list, total, date, item } = useContext(CartContext);
    const [dato, setDato] = useState({
        nombre: '',
        telefono: '',
        email: '',
        fecha: ''

    });

    const handleChange = (e) => {
        setDato({
            ...dato,
            [e.target.name]: e.target.value,
            list,
            total
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("compra").add(dato)
        } catch (error) {
            console.log(error)
        }

        e.target.reset()
        alert('Compra realizada Correctamente!!')
        window.location.href = "/";
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Nombre
            </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Telefono
            </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Telefono"
                    name="telefono"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email
            </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Fecha
            </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fecha"
                    defaultValue={date}
                />
            </div>
            <div className="mb-3">

                <div>
                    {
                        list.map((l) => {
                            return (
                                <div key={l.id}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        name="idProducto"
                                        value={l.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
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
                    {
                        total > 0 && (
                            <input
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                name="total"
                                value={total}
                                onChange={handleChange}
                                required
                            />
                        )
                    }

                </div>
            </div>
            <div className="wrap-btn">
                {
                    item > 0 && <button type="submit" className="btn btn-success btn-cargar">Cargar</button>
                }
                <Link to="/">
                    <Button variant="link">Volver al Inicio</Button>
                </Link>
            </div>
        </form>
    )
}
export default FormCompra;