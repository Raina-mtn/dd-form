let app = getApp();


//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名
let domain = "http://localhost:8080";
let url = domain + '/login';

Page({
    data:{
        corpId: '',
        authCode:'',
        userId:'',
        userName:'',
        
          
    },
    loginSystem() {
        // dd.showLoading();
        dd.getAuthCode({
            success:(res)=>{
                this.setData({
                    authCode:res.authCode
                })
                const app = getApp()
                app.login({authCode: res.authCode, username: '小方', pass:'123456' }).then(result=>{
                    console.log(result);
                    let userId = '1';
                    let userName = '小方';
                    this.setData({
                        userId:userId,
                        userName:userName,
                        hideList:false
                    })
                })
            },
            fail: (err)=>{
                // dd.alert({content: "step3"});
                dd.alert({
                    content: JSON.stringify(err)
                })
            }
        })

    },
    onLoad(){

        let _this = this;

        this.setData({
            corpId: app.globalData.corpId
        })
        
        //dd.alert({content: "step1"});
         
        
        
    }
})