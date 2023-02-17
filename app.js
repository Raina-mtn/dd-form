import {apiLogin} from './api/interface/index'
App({
  async onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    console.info("my.SDKVersion:" + my.SDKVersion);
    this.globalData.corpId = options.query.corpId;

    //获取authCode
    await dd.getAuthCode({
      success:({authCode})=>{
        this.globalData.authCode = authCode
      },
      fail:function(err){
        console.log('err',err);
      }
  });
    //获取access_token
    await dd.httpRequest({
      url: 'https://oapi.dingtalk.com/gettoken',
      method: 'GET',
      data: {
        appkey: 'dingcpfqixdl2ykupkuf',
        appsecret: 'M6ihQs5TeKm4oDVkuDaXASQEjmZnmpg5OZlb0m_xnvpr1PqXaUsBA7i_4dE2xRQF',
      },
      appsecret: 'json',
      success: (res)=>{
        console.log('access_token',res);
        this.globalData.access_token=res.data.access_token
      },
    });

    //获取userid
    await dd.httpRequest({
      url: 'https://oapi.dingtalk.com/topapi/v2/user/getuserinfo',
      method: 'POST',
      data: {
        access_token: this.globalData.access_token,
        code: this.globalData.authCode,
      },
      appsecret: 'json',
      success: ({data})=>{
        console.log('userid',data);
        this.globalData.userid=data.result.userid
      },
    });

    await dd.httpRequest({
      url: 'https://oapi.dingtalk.com/cspace/get_custom_space',
      method: 'GET',
      data: {
        access_token: this.globalData.access_token,
        domain: 'upload',
      },
      appsecret: 'json',
      success: ({data})=>{
        console.log('data',data);
        this.globalData.spaceid=data.spaceid
      },
    });
    await dd.httpRequest({
      url: 'https://oapi.dingtalk.com/cspace/grant_custom_space',
      method: 'GET',
      data: {
        access_token: this.globalData.access_token,
        domain: 'upload',
        type:'add',
        path:'/',
        userid:this.globalData.userid,
      },
      appsecret: 'json',
      success: (res)=>{
        console.log('res',res);
      },
    });
    
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData: {
    corpId:'',
    authCode:'',
    access_token:'',
    userid:'',
    spaceid:'',
  },
  login(data){
    return new Promise(resolve=>{
      apiLogin({...data}).then(res=>{
        resolve(res)
        dd.setStorageSync({ // 登录成功后设置缓存
          key: 'token',
          data: res.data
        })
      })
    }) 
  },
  showToast(content){
    dd.showToast({
        type: 'none',
        content:content,
        delay:500,
        duration: 2000
    })
  }
});
