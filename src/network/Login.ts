import {request} from "@/network/index";
import {AxiosResponse} from "axios";

type Method = 'post' | 'get'

export function Login(url:string, data:string,method:Method = 'post',):Promise<AxiosResponse> {
    return  request({
        method,
        url,
        data
    })
}