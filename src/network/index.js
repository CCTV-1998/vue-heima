import axios from "axios";
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://ttapi.research.itcast.cn',
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    instance.interceptors.request.use((data) => {
        return data;
    });
    instance.interceptors.response.use((data) => {
        return data;
    });
    return instance(config);
}
//# sourceMappingURL=index.js.map