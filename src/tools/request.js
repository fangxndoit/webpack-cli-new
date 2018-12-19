/* eslint-disable */
import axios from 'axios';
var Promise = require('es6-promise').Promise;



// axios 配置
axios.defaults.timeout = 5000;  //设置超时时间
axios.defaults.baseURL = 'http://tissue.jomlz.cn/api/'; //这是调用数据接口

// http request 拦截器（所有发送的请求都要从这儿过一次），通过这个，我们就可以把token传到后台，我这里是使用sessionStorage来存储token等权限信息和用户信息，若要使用cookie可以自己封装一个函数并import便可使用
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token"); //获取存储在本地的token
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json', //设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
            'token': token
        };
        if (token) {
            config.headers.Authorization = "token " + token; //携带权限参数
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);


// http response 拦截器（所有接收到的请求都要从这儿过一次）
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {            
            return Promise.resolve(response.data);        
        } else {            
            return Promise.reject(response);        
        }  
    },
    error => {
        //return Promise.reject(error.response.data)
        return Promise.reject(error)
    });

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}