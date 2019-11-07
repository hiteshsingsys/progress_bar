import Vue from 'vue'
import axios from 'axios'

let config = {
    baseURL: process.env.VUE_APP_API_BASE_URL,
    Accept: 'application/json'
}

let _axios = axios.create(config)

_axios.interceptors.request.use(
    config => {
        // Do something before request is sent
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
_axios.interceptors.response.use(
    response => {
        // Do something with response data
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    })
}

Vue.use(Plugin)

export default Plugin
export { _axios };
