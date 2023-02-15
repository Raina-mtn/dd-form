import { getListMock} from '/api/interface/mock'

Page({
  data:{
    current: 0,
    items: [
      {
        title:"故障工单",
        value:'faultOrderCount'
      },{
        title:"计划检修",
        value:'repairOrderCount'
      },{
        title:"计划检修变更",
        value:'repairModifyCount'
      },{
        title:"临时检修",
        value:'tempOrderCount'
      },{
        title:"事件提报",
        value:'incidentCount'
      },{
        title:"故障修复延期申请",
        value:'delayOrderCount'
      },
    ],
    todoCount:{
      delayOrderCount:"0",
      faultOrderCount:"3",
      incidentCount:"0",
      repairModifyCount:"0",
      repairOrderCount:"0",
      tempOrderCount:"0",
    },
    pendingList:[]

  },
  onLoad(){
    dd.setNavigationBar({
      title: '待办'})
    getListMock().then((res)=>{
      this.setData({'pendingList':res.data})
    })
  },
  handleChangeTab(current) {
    this.setData({ current });
  },
});
