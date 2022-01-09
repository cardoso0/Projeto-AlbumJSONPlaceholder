import axios from 'axios';

const BASE =  'https://jsonplaceholder.typicode.com'

export const api = {
    getAllAlbums: async () => {
        let response = await axios.get(`${BASE}/albums`)
        return response.data;
    },

    getAlbum: async () => {
        let response = await axios.get(`${BASE}/albums/1/photos`)
        return response.data;
    }

}