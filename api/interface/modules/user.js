import { httpReq } from "../../request";

export const apiLogin = (data) => httpReq({
    method: 'post',
    data,
    url: '/login',
    isLoginRequest: true
})