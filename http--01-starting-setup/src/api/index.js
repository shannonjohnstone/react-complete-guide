import axios from 'axios';

export const API = (() => {
    const dataUrl = `https://jsonplaceholder.typicode.com`;

    return {
        getPosts: () => axios.get(`${dataUrl}/posts`),
        getPost: (id) => axios.get(`${dataUrl}/posts/${id}`)
    }
})()