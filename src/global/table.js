import React from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css'

const table = (props) => {

    const handleClick = (element) => {
        props.to_setElementSelected(props.to_elementSelected.filter(e => e !== element))
    };

    const handleChange = (id) => {
        let list_aux = [];
        let aux = document.getElementById(id).value;
        if(!aux) { aux = 1; }

        for (var i = 0; i < props.to_elementSelected.length; i++) {
            if(props.to_elementSelected[i].id === id) {
                props.to_elementSelected[i].cantidad = aux;
                props.to_elementSelected[i].valor_total = Number(props.to_elementSelected[i].precio_venta) * Number(aux);
            }
            list_aux.push(props.to_elementSelected[i]);
        }
        props.to_setElementSelected(list_aux);
    };

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.to_elementSelected.map(
                        element => {
                            return (
                                <tr key={element.id} className='row-table'>
                                    <td>{element.descripcion}</td>
                                    <td>{new Intl.NumberFormat("de-DE").format(element.valor_total)}</td>
                                    <td> 
                                        <input className='input-col-cantidad' id={element.id} type="number" min="1" pattern="^[0-9]+" placeholder="1" defaultValue={1}
                                                onChange={() => handleChange(element.id)}
                                        />
                                    </td>
                                    <td>
                                        <Button variant="danger" size='sm' onClick={() => handleClick(element)}><RiDeleteBin2Fill /></Button>
                                    </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default table