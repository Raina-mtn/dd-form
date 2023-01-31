import baseUrl from '../config/index'
const errorCode = [12,13]
/**
 * 
 * @param {*url} 请求路径
 * @param {*method} 请求方法
 * @param {*config} 请求额外的配置参数
 * @param {*data} 请求参数
 * @param {*msg} 网络请求时的提示信息
 * @param {*isLoginRequest} 是否是登录请求
 * @returns 
 */
const httpReq = ({url,method, config={}, data, msg='加载中...', isLoginRequest})=>{
    dd.showLoading({content:msg})
    return new Promise(async (resolve, reject)=>{
        const prevPages = getCurrentPages() // 当前打开的所有页面
        const currentPage = prevPages[prevPages.length-1].route
        const app = getApp()
        if(!dd.getStorageSync({key: 'token'}).data && !isLoginRequest){ // 未登录先去登录
         await app.login()
        }
        const token = dd.getStorageSync({key: 'token'})
        const headers = {
            'Content-Type': 'application/json',
            ...config.headers,
            token
        }
        // Content-Type为application/json时，data参数只支持json字符串，用户需要手动调用JSON.stringify进行序列化
        let params = {...data}
        if(headers['Content-Type'] === 'application/json') {
            params = JSON.stringify(params)
         }
        dd.httpRequest({
            url: `${baseUrl}${url}`,
            method,
            data:params,
            dataType: 'json',
            headers,
            success: function(res){
                dd.hideLoading()
                if(res.status === 200){ // 请求成功
                    if(res.data.code === 1){ // 接口正确返回状态码
                        resolve(res.data)
                    }else{
                        app.showToast( res.data.msg)
                        reject(res.data)
                    }
                }else{
                    reject(res.data)
                }
            },
            fail: function(res){ // 请求失败
                console.log(res);
                dd.hideLoading()
                const pages = getCurrentPages()
                if(!pages.find(l=>l.route === currentPage)) return ; // 由于页面销毁导致的请求出错（用户快速后退）
                if(errorCode.includes(res.error)){ // 网络问题
                    // 跳转到网络错误页
                }else if(res.status === 401){ // 登录权限问题

                } else{
                    app.showToast( res.errorMessage + res.status)
                }
                reject(res)
            }
        })
    })
}

module.exports = { httpReq }