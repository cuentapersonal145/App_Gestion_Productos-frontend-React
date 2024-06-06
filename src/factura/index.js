import { React, useState, useEffect, useRef } from 'react'
import { FaPrint } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import './index.css';

const FacturaView = () => {
    const message = JSON.parse(localStorage.getItem("state"));
    const total = JSON.parse(localStorage.getItem("total_factura"));
    const printRef = useRef();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Actualizar la hora cada segundo
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    };

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    return (
        <div>
            <div className='conteiner-btn-print'>
                <Button className='btn-print' variant="primary" size='lg' onClick={handlePrint}><FaPrint /></Button>
            </div>
            <div ref={printRef} className='factura-content'>
                <div className='text-align-center'>
                    <div>GRANERO LA ECONOMÍA DEL NORTE</div>
                    <div>NIT: 1002958486-6</div>
                    <div>Dirección: Calle 67N # 11-47</div>
                    <div>Celular: 3128808853</div>
                    <div>Popayán-Cauca</div>
                    <div>----------------------------------------------------------------------</div>
                    <div>Fecha: {formatDate(currentTime)}</div>
                    <div>----------------------------------------------------------------------</div>
                    <div className='content-table'>
                        <table>
                            <thead>
                                <tr>
                                    <td className='text-align-left padding-y max-with'>Descripcion</td>
                                    <td className='padding-y'>Cant</td>
                                    <td></td>
                                    <td className='text-align-left'>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {message.map(
                                    element => (
                                        <tr key={element.id}>
                                            <td className='text-align-left padding-y max-with'>{element.descripcion}</td>
                                            <td className='padding-y'>{element.cantidad}</td>
                                            <td>$</td>
                                            <td className='text-align-right'>{new Intl.NumberFormat("de-DE").format(element.valor_total)}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div>----------------------------------------------------------------------</div>
                    <div>Total: ${new Intl.NumberFormat("de-DE").format(total)}</div>
                    <div>----------------------------------------------------------------------</div>
                    <div>✔GRACIAS POR PREFERIRNOS!</div>
                </div>
            </div>
        </div>
    )
}

export default FacturaView