import axios from 'axios';
const API_URL = 'http://' + process.env.REACT_APP_HOST + ':8000';

export default class service {

    get_articulos_service() {
        const url = `${API_URL}/api/articulo/`;
        return axios.get(url);
    }
}