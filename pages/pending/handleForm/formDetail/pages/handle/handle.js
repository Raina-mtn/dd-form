Page({
  data: {
    closeVisile:false,
    value:'',
    groupOptions:[
      { label: '通信', value: '0' },
      { label: '信号', value: '1' },
      { label: 'OCC', value: '2' },
      { label: '供电', value: '3' },
      { label: '土建', value: '4' },
      { label: '车辆', value: '5' },
      { label: '施工', value: '6' },
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
