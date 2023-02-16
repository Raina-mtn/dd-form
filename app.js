import {apiLogin} from './api/interface/index'
App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    console.info("my.SDKVersion:" + my.SDKVersion);
    this.globalData.corpId = options.query.corpId;
    dd.getSystemInfo({
      success: ({model}) => {
        this.globalData.model =model.toLowerCase()
      }
    })
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData: {
    corpId:'',
    model:''
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
