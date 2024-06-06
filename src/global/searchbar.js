import React from 'react'
import {FaSearch} from "react-icons/fa"
import './searchbar.css'

const searchbar = (props) => {
    const handleInputChange = (event) => {
        const term = event.target.value;
        props.to_change(term);
    };

    return (
        <div className='input-search-container'>
            <FaSearch id="search-icon"/>
            <input type="text" placeholder="Buscar..." value={props.to_value} onChange={handleInputChange}/>
        </div>
    )
}

export default searchbar
