import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Modal } from 'react-bootstrap';
import './ModalCompra.scss';
import { db } from "../../../firebase";
import { Link } from 'react-router-dom';
import DetalleCompra from '../../DetalleCompra/DetalleCompra';

const ModalCompra = () => {
    const { list, total } = useContext(CartContext);
    const [dato, setDato] = useState({
        nombre: '',
        telefono: '',
        email: '',
        fecha: ''
    });

    const handleChange = (e) => {
        setDato({
            ...dato,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("compra").add(dato)
            console.log("upload success")
        } catch (error) {
            console.log(error)
        }

        e.target.reset()
    }
    console.log(dato);

    return (
        <div>
            <Modal.Dialog className="compra">
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Fecha
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                name="fecha"
                            onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                        
                            {/* <div>
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
                                                />
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="name@example.com"
                                                    name="precio"
                                                    value={l.precio}
                                                onChange={handleChange}
                                                />

                                            </div>
                                        )
                                    })
                                }
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    name="total"
                                    value={total}
                                onChange={handleChange}
                                />
                            </div> */}
                        </div>
                        <div className="wrap-btn">
                         
                            <button type="submit" className="btn btn-success btn-cargar">Cargar</button>
                         <Link to="/detalle">Detalle de compra</Link>
                        </div>
                    </form>
                </Modal.Body>
            </Modal.Dialog>
          
        </div>
    )
}
export default ModalCompra;