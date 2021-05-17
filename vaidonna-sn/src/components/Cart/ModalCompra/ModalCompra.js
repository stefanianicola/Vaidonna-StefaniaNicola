import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalCompra.scss';
import FormCompra from './FormCompra/FormCompra';

const ModalCompra = () => {
  

    return (
            <Modal.Dialog className="compra">
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormCompra/>
                </Modal.Body>
            </Modal.Dialog>
          

    )
}
export default ModalCompra;