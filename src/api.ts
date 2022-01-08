import axios from 'axios';

const BASE =  'https://jsonplaceholder.typicode.com'

export const api = {
    getAllAlbums: async () => {
        let response = await axios.get(`${BASE}/albums`)
        return response.data;
    }
}