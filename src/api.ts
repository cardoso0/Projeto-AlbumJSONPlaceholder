import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const api = {
    getAllAlbums: async () => {
        const req = await request('/albums');
        return req.data;
    },
    getAlbum: async (id: string) => {
        const req = await request(`/albums/${id}`);
        return req.data;
    },
    getPhotosFromAlbum: async (id: string) => {
        const req = await request(`/albums/${id}/photos`);
        return req.data;
    },
    getPhoto: async (id: string) => {
        const req = await request(`/photos/${id}`);
        return req.data;
    }
};


// import axios from 'axios';

// const BASE =  'https://jsonplaceholder.typicode.com'

// export const api = {
//     getAllAlbums: async () => {
//         let response = await axios.get(`${BASE}/albums`)
//         return response.data;
//     },
//     getAlbum: async (id: string) => {
//         let response = await axios.get(`${BASE}/albums/${id}`)
//         return response.data;
//     },
//     getPhotosFromAlbum: async (id: string) => {
//         let response = await axios.get(`${BASE}/albums/${id}/photos`)
//         return response.data;
//     },
//     getPhoto: async (id: string) => {
//         let response = await axios.get(`${BASE}/photos/${id}`)
//         return response.data;
//     }
// }