Page({
  data:{
    current: 0,
    items: [
      {
        title:"故障工单",
      },{
        title:"计划检修",
      },{
        title:"计划检修变更",
      },{
        title:"临时检修",
      },{
        title:"事件提报",
      },
    ],
  },
  onLoad(){
    dd.setNavigationBar({
      title: '草稿'})
  },
  handleChangeTab(current) {
    this.setData({ current });
  },
});
