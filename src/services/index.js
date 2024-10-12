import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export default class service {

    get_articulos_service() {
        const url = `${API_URL}/api/articulo/`;
        return axios.get(url);
    }
}