Page({
  data: {
    closeVisile:false,
    value:'',
    groupOptions:[
      { text: '通信', key: '0' },
      { text: '信号', key: '1' },
      { text: 'OCC', key: '2' },
      { text: '供电', key: '3' },
      { text: '土建', key: '4' },
      { text: '车辆', key: '5' },
      { text: '施工', key: '6' },
    ],
    nextProgress:''
  },
  onLoad(options) {
    this.setData({'nextProgress':options.nextProgress})
  },
  handlePopupOpen(){
    this.setData({closeVisile:true})
  },
  handlePopupClose(){
    this.setData({closeVisile:false})
  },
  handleAction(){
    dd.showToast({
      type: 'success',
      content: '转派成功！',
      duration: 1000,
      success: () => {
        my.switchTab({
          url: '/pages/pending/pending'
        })
      }
    })
  },
  onChange(v, items, e) {
    console.log('当前选中的值为：', v, items, e);
  },
  submit(){
    dd.showToast({
      type: 'success',
      content: '提交成功！',
      duration: 1000,
      success: () => {
        my.switchTab({
          url: '/pages/pending/pending'
        })
      }
    })
  }
});
