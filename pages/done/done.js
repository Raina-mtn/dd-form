import { getListMock} from '/api/interface/mock'

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
    doneList:[]
  },
  onLoad(){
    dd.setNavigationBar({
      title: '已办'})
    getListMock().then((res)=>{
      this.setData({'doneList':res.data})
    })
  },
  handleChangeTab(current) {
    this.setData({ current });
  },
});
