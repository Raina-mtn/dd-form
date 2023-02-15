Page({
  data: {
    columns:[{
      label:'驳回原因',
      name:'reason',
      el:'textarea'
    }]
  },
  onLoad() {},
  submit(){
    dd.showToast({
      type: 'success',
      content: '驳回成功！',
      duration: 1000,
      success: () => {
        my.switchTab({
          url: '/pages/pending/pending'
        })
      }
    })
  }
});
