import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineEmojiObjects } from "react-icons/md";
import DataEjm from '../components/Data';
import { Table } from 'react-bootstrap';
import '../styles/General.css';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";


function Base() {
    const { productList } = DataEjm;
    const [product, setProduct] = useState([]);
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [entrada, setEntrada] = useState('');
    const [salida, setSalida] = useState('');
    const [responsable, setResponsable] = useState('');
    const [comment, setCommet] = useState('');
    const [operation, setOperation] = useState(1);
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Editar Producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Información del producto</h4>
                    <div>
                        <input type="hidden" id='id' />
                    </div>
                    <div>
                      <label id='product' ><MdOutlineEmojiObjects /></label>
                        <input type="text" id='product' placeholder='Nombre del Producto' value={product} onChange={(e)=>setProduct(e.target.value)}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div className='base-container'>
            <div className='first-container'>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Añadir producto
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <div className='base-modal'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Descripción</th>
                            <th>Entrada</th>
                            <th>Salida</th>
                            <th>Responsable</th>
                            <th>Obs.</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product, id) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.producto}</td>
                                <td>{product.description}</td>
                                <td>{product.entrada}</td>
                                <td>{product.salida}</td>
                                <td>{product.responsable}</td>
                                <td></td>
                                <td>
            <button className="icon-button edit-button">
            <CiEdit />
            </button>
            &nbsp;
            <button className="icon-button delete-button">
            <MdOutlineDelete />
            </button>
        </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Base;
