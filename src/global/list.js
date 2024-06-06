import React from 'react'
/*import { Link } from 'react-router-dom';*/
import './list.css'

const list = (props) => {

    const handleClick = (element) => {
        /*const value = event.target.getAttribute('value');*/
        props.to_select(element);
    };

    return (
        <div className="container-list">
            { props.list.map(
                element => (
                    <div 
                        className="card-container" 
                        /*to={props.context + "/" + element.id + "/" + element.descipcion}*/ 
                        key={element.id} value={element.id} onClick={() => handleClick(element)}
                    >
                        <div className="description-card-container" value={element}>
                            <div value={element.id}>
                                <div className='description1-card' value={element.id}> {element.descripcion} </div>
                                { 
                                    element.precio_venta ? <div className='description2-card' value={element.id}> 
                                    [ ${new Intl.NumberFormat("de-DE").format(element.precio_venta)} ] </div> : 
                                    null
                                }
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default list
