import { httpReq } from "../../request";

export const apiLogin = (data) => httpReq({
    method: 'post',
    data,
    url: '/oauth/token',
    isLoginRequest: true
})