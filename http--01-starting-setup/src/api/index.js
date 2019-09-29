let instance;

export const API = ((axios, baseURL) => {
    const log = (msg) => console.log(`@@ Post API > ${msg}`)
    const errorLog = (msg, err) => console.log(`@@ Post API > ${msg}`, err)

    if (!instance) {
        log('Initializing')
        instance = axios.create({ baseURL });
    }

    return {
        getPosts: () => instance.get(`/posts`),
        getPost: async (id) => instance.get(`/posts/${id}`),
        postNewPost: (data) => instance.post(`/posts`, data),
        deletePost: (id) => instance.delete(`/posts/${id}`),
        getInstance: () => instance
    }
})(
    require('axios'),
    `https://jsonplaceholder.typicode.com`
);