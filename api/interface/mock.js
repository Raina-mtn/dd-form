const listMock=[{
  id:'GZ20230109006',
  grade:'B',
  reportTime:'2023-01-03',
  isExceed:false,
  detail:'火警报警器故障'
},{
  id:'GZ20230109007',
  grade:'A',
  reportTime:'2023-01-04',
  isExceed:false,
  detail:'螺丝松动'
},{
  id:'GZ20230109008',
  grade:'C',
  reportTime:'2023-01-05',
  isExceed:false,
  detail:'漏水'
}]
const riskMock1={
  form:{
    reportName:'小王',
    reportDev:'工单班组1',
    id:'SN-003',
    name:'高压受流系统',
    line:'4',
    area:['0', '1', '2'],
    textarea:'门口',
    level:'A',
    detail:'无法使用',
    dispatch:'3',
    type:'3',
    stop:true,
  },
  dispatch:{
    finishTime:'2023-0106 12:22:51'
  }
}
const riskMock2={
  form:{
    reportName:'小王',
    reportDev:'工单班组1',
    id:'SN-003',
    name:'高压受流系统',
    line:'4',
    area:['0', '1', '2'],
    textarea:'门口',
    level:'A',
    detail:'无法使用',
    dispatch:'3',
    type:'3',
    stop:true,
  },
  dispatch:{
    finishTime:'2023-0106 12:22:51'
  },
  group:{
    confirmName:'小张',
    groupType:'0',
    groupDetail:'测试',
    groupLevel:'B',
    time:'2023-01-09 12:45:18'
  }
}
const riskMock3={
  form:{
    reportName:'小王',
    reportDev:'工单班组1',
    id:'SN-003',
    name:'高压受流系统',
    line:'4',
    area:['0', '1', '2'],
    textarea:'门口',
    level:'A',
    detail:'无法使用',
    dispatch:'3',
    type:'3',
    stop:true,
  },
  dispatch:{
    finishTime:'2023-0106 12:22:51'
  },
  group:{
    confirmName:'小张',
    groupType:'0',
    groupDetail:'测试',
    groupLevel:'B',
    time:'2023-01-09 12:45:18'
  }
}
const riskProgressMock1=[{title:'小王',value:'form',description:'2023-01-06 10:20:15'},{title:'小赵',value:'dispatch',description:'2023-01-06 10:51:15'}]
const riskProgressMock2=[{title:'小王',value:'form',description:'2023-01-06 10:20:15'},{title:'小赵',value:'dispatch',description:'2023-01-06 10:51:15'},{title:'小张',value:'group',description:'2023-01-06 10:51:15'}]
const riskProgressMock3=[{title:'小王',value:'form',description:'2023-01-06 10:20:15'},{title:'小赵',value:'dispatch',description:'2023-01-06 10:51:15'},{title:'小张',value:'group',description:'2023-01-06 10:51:15'},{title:'小王',value:'group',description:'2023-01-05 10:51:15'}]


export const getListMock = (data) =>new  Promise((resolve=>{
  resolve({data: listMock})
}))
export const geFormMock = (data) =>new  Promise((resolve=>{
  console.log('data',data);
  if(data.id === 'GZ20230109006'){
    resolve({data: riskMock1})
  }else if(data.id ==='GZ20230109007'){
    resolve({data: riskMock2})
  }else if(data.id ==='GZ20230109008'){
    resolve({data: riskMock3})
  }
}))
export const geProgressMock = (data) =>new  Promise((resolve=>{
  console.log('data',data);
  if(data.id === 'GZ20230109006'){
    resolve({data: riskProgressMock1})
  }else if(data.id ==='GZ20230109007'){
    resolve({data: riskProgressMock2})
  }else if(data.id ==='GZ20230109008'){
    resolve({data: riskProgressMock3})
  }
}))