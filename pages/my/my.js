Page({
  data: {
    itemList:[
      {
        name:'我的已办',
        url:'/pages/done/done'
      },
      {
        name:'我的草稿',
        url:'/pages/draft/draft'
      },
      {
        name:'我的提报',
        url:'/pages/mySubmit/mySubmit'
      }
    ]
  },
  onLoad(){
    dd.setNavigationBar({
      title: '我的'})},
  handleTap(e) {
    console.log('e.target.dataset.url',e.target.dataset.url);
    my.navigateTo({
      url:e.target.dataset.url
    })
  }
});