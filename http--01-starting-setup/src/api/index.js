export const API = ((axios, baseURL) => {
    const log = (msg) => console.log(`@@ Post API > ${msg}`)
    const errorLog = (msg, err) => console.log(`@@ Post API > ${msg}`, err)

    log('bootstrap');

    let instance;

    return {
        getPosts: () => instance.get(`/posts`),
        getPost: (id) => instance.get(`/posts/${id}`),
        postNewPost: (data) => instance.post(`/posts`, data),
        deletePost: (id) => instance.delete(`/posts/${id}`),
        init: () => {
            log('Initializing')

            instance = axios.create({ baseURL });

            instance.interceptors.request.use(request => {
                log('request')
                return request;
            }, error => {
                errorLog(`request error`, error);
                return Promise.reject(error);
            });

            instance.interceptors.response.use(response => {
                log('response')
                return response;
            }, error => {
                errorLog(`response error`, error);
                return Promise.reject(error);
            });
        }
    }
})(
    require('axios'),
    `https://jsonplaceholder.typicode.com`
);