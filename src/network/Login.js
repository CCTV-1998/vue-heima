import { request } from "@/network/index";
export function Login(url, data, method = 'post') {
    return request({
        method,
        url,
        data
    });
}
//# sourceMappingURL=Login.js.map