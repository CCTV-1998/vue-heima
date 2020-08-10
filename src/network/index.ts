import axios, {AxiosPromise, AxiosRequestConfig} from "axios"

export function request<T>(config : AxiosRequestConfig) : AxiosPromise {
    const instance = axios.create({
        baseURL: 'http://ttapi.research.itcast.cn',
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    instance.interceptors.request.use((data : any) : any => {
        return data
    })
    instance.interceptors.response.use((data : any) : any => {
        return data
    })
    return instance(config)
}