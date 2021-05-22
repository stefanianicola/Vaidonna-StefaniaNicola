import React from 'react';
import './Loading.scss';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
    return (
        <div className="wrap-loading">
            <Spinner animation="border" role="status">
                <span className="sr-only">Cargando...</span>
            </Spinner>
        </div>
    )
}
export default Loading;
