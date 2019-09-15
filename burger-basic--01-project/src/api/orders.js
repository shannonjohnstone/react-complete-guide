export const ordersAPI = ((axios, baseURL, apiName) => {
    const log = (msg) => console.log(`@@ ${apiName} > ${msg}`)
    const errorLog = (msg, err) => console.log(`@@ ${apiName} > ${msg}`, err)

    log('bootstrap');

    let instance;

    return {
        createOrder: (data) => instance.post(`/orders.json`, data),
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
    `https://burger-builder-d1969.firebaseio.com/`,
    'Orders API'
);