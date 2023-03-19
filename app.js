import {apiLogin} from './api/interface/index'
App({
  async onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    console.info("my.SDKVersion:" + my.SDKVersion);


  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    //获取Authentication
    
  },
  globalData: {
    corpId:'',
    model:''
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
