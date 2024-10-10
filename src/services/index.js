import axios from 'axios';
//const API_URL = 'http://localhost:8000';
//const API_URL = 'http://192.168.1.51:8000';
const API_URL = 'http://192.168.1.104:8000';

export default class service {
    
    get_articulos_service() {
        const url = `${API_URL}/api/articulo/`;
        return axios.get(url);
    }
}