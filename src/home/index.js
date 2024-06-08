import { React, useEffect, useState } from 'react';
import swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

import service from '../services';
import Header from '../global/header';
import Footer from '../global/footer';
import List from '../global/list';
import SearchBar from '../global/searchbar';
import Table from '../global/table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

const objService = new service();

const HomeView = () => {
    const [elements, setElements] = useState([]);
    const [selected, setSelected] = useState(null);
    const [elementsSelected, setElementsSelected] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [totalFactura, setTotalFactura] = useState(0);

    useEffect(() => {
        objService.get_articulos_service().then((result) => {
            setElements(result.data);
        }).catch(() => {
            swal.fire({
                title: 'Ups ¡Error!',
                html: '<div style="text-align: justify;">Ocurrio al tratar de obtener los articulos. Puede deberse a una inactividad del servidor proveedor. Deberias intentar mas tarde o consultarlo con el administrador</div>',
                icon: 'error'
            });
        });
    }, []);

    useEffect(() => {
        setFilteredData(
            elements.filter(item =>
                item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, elements]);

    useEffect(() => {
        if (selected) {
            let validacion = elementsSelected.find(x => x.id === selected.id);
            if (!validacion) {
                const aux = {
                    id: selected.id,
                    descripcion: selected.descripcion,
                    precio_venta: selected.precio_venta,
                    cantidad: 1,
                    valor_total: selected.precio_venta
                }
                setElementsSelected(prevElements => [...prevElements, aux]);
            }
            setSelected(null);
        }
    }, [selected]);

    useEffect(() => {
        let suma = 0;
        elementsSelected.forEach(element => {
            suma += element.valor_total;
        });
        setTotalFactura(suma);
    }, [elementsSelected]);

    const handleClickFactura = () => {
        localStorage.setItem("state", JSON.stringify(elementsSelected));
        localStorage.setItem("total_factura", JSON.stringify(totalFactura));
        window.open('/facturacion/imprimir','_blank', "noreferrer");
    };

    const handleClickClear = () => {
        setElementsSelected([]);
    };

    return (
        <div>
            <Header titulo={"Facturación"} />
            <div className='encabezado' />
            <div className='page-content'>
                <div className='page-content-izq'>
                    <SearchBar to_value={searchTerm} to_change={setSearchTerm} />
                    {elements.length > 0 ? <List context={"/productos"} list={filteredData} to_select={setSelected} /> : null}
                </div>
                <div className='page-content-der'>
                    <div className='page-content-der-1'>
                        <div className='total-factura'>Total: {new Intl.NumberFormat("de-DE").format(totalFactura)}</div>
                        <div>
                            <Button className='btn-to-go-print' variant="danger" size='lg' onClick={handleClickClear}>Limpiar</Button>
                            <Button className='btn-to-go-print' variant="primary" size='lg' onClick={handleClickFactura}>Generar Factura</Button>
                        </div>
                    </div>
                    <Table to_elementSelected={elementsSelected} to_setElementSelected={setElementsSelected} />
                </div>
            </div>
            <div className='footer' />
            <Footer />
        </div>
    )
}

export default HomeView
