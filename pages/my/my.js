Page({
  data: {
    itemList:[
      {
        name:'我的已办',
        url:'/pages/done/done'
      },
      {
        name:'我的草稿',
        url:'/image/trobleTicket.png'
      },
      {
        name:'我的提报',
        url:'/image/trobleTicket.png'
      }
    ]
  },
  handleTap(e) {
    my.navigateTo({
      url:e.target.dataset.url
    })
  }
});