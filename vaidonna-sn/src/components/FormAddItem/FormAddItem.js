import React, { useState } from "react";
import { db } from "../../firebase";
import './FormAddItem.scss';


const Form = () => {
    const [item, setItems] = useState({
        nombre: '',
        img: '',
        categoria: '',
        precio: 0,
        descripcion: ''
    })

    const handleChange = (e) => {
        setItems({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("items").add(item)
            console.log("upload success")
        } catch (error) {
            console.log(error)
        }

        e.target.reset()
    }

    return (
        <form className="formulario-container container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Nombre
        </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="nombre"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Imagen
        </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="img"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Categoria
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="categoria"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Precio
        </label>
                <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="precio"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Descripcion
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="descripcion"
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="wrap-btn">
                <button type="submit" className="btn btn-success btn-cargar">Cargar</button>
            </div>
        </form>
    );
};

export default Form;