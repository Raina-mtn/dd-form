Page({
  data: {
    itemList:[
      {
        name:'故障工单',
        image:'/image/planTicket.png',
        url:'/pages/form/risk/risk'
      },
      {
        name:'临时检修工单',
        image:'/image/trobleTicket.png'
      },
      {
        name:'计划检修工单',
        image:'/image/trobleTicket.png'
      },
      {
        name:'事件提报',
        image:'/image/trobleTicket.png'
      },
    ]
  },
  handleTap(e) {
    my.navigateTo({
      url:e.target.dataset.url
    })
  },
});