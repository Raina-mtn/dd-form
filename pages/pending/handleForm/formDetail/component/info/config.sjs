//提报信息详情
export const riskForm=[{
  label:'故障报告人',
  name:'reportName',
  el:'input',
  disabled:true
},{
  label:'报告人部门',
  name:'reportDev',
  el:'input',
  disabled:true
},{
  label:'资产编码',
  name:'id',
  el:'input',
  disabled:true
},{
  label:'资产名称',
  name:'name',
  el:'input',
  disabled:true
},{
  label:'线路',
  name:'line',
  el:'picker',
  options:[
    { label: '四号线', value: '4' },
    { label: '五号线', value: '5' },
  ],
  disabled:true
},{
  label:'区域',
  name:'area',
  el:'cascader',
  join:'/',
  options:[
    { 
      label: '4号线车站', 
      value: '0' ,
      children:[{ 
        label: '城星路站', 
        value: '1' ,
        children:[{ 
          label: '保护层地面区', 
          value: '2' 
        }]
      }]
    },
    {
      label: '4号线七堡停车场', 
      value: '3' ,
      children:[{ 
        label: '第一车库', 
        value: '4' ,
        children:[{ 
          label: '1层', 
          value: '5' 
        }]
      }]
    }
  ],
  disabled:true
},{
  label:'详细位置',
  name:'textarea',
  el:'textarea',
  disabled:true
},{
  label:'故障等级',
  name:'level',
  el:'picker',
  options:[
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' }
  ],
  disabled:true
},{
  label:'故障现象',
  name:'detail',
  el:'textarea',
  disabled:true
},{
  label:'专业调度',
  name:'dispatch',
  el:'picker',
  options:[
    { label: '通信', value: '0' },
    { label: '信号', value: '1' },
    { label: 'OCC', value: '2' },
    { label: '供电', value: '3' },
    { label: '土建', value: '4' },
    { label: '车辆', value: '5' },
    { label: '施工', value: '6' },
  ],
  disabled:true
},{
  label:'故障类型',
  name:'type',
  el:'picker',
  options:[
    { label: '行车安全', value: '0' },
    { label: '乘客服务', value: '1' },
    { label: '人员伤害', value: '2' },
    { label: '其他', value: '3' }
  ],
  disabled:true
},{
  label:'是否停用',
  name:'stop',
  el:'switch',
  disabled:true
},{
  label:'上传图片/视频',
  name:'image',
  el:'slot',
  count:9,
  disabled:true
},]

//调度处理信息
export const riskDispatch=[{
  label:'处理班组',
  name:'group',
  el:'slot'
},{
  label:'要求修复时间',
  name:'finishTime',
  labelWidth:'110px',
  el:'slot',
  format:'YYYY-MM-DD HH:mm:ss',
  precision:'second',
  disabled:true
},]

//班组处理信息
export const riskGroup=[{
  label:'班组确认人',
  name:'confirmName',
  el:'input',
  disabled:true
},{
  label:'故障类型',
  name:'groupType',
  el:'picker',
  options:[
    { label: '行车安全', value: '0' },
    { label: '乘客服务', value: '1' },
    { label: '人员伤害', value: '2' },
    { label: '其他', value: '3' }
  ],
  disabled:true
},{
  label:'故障详情',
  name:'groupDetail',
  el:'textarea',
  disabled:true
},{
  label:'故障等级',
  name:'groupLevel',
  el:'picker',
  options:[
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' }
  ],
  disabled:true
},{
  label:'工班完成时间',
  name:'time',
  el:'slot',
  format:'YYYY-MM-DD HH:mm:ss',
  precision:'second',
  disabled:true
},{
  label:'备注',
  name:'remark',
  el:'textarea',
  disabled:true
},{
  label:'班组处理照片',
  name:'media',
  el:'media',
  labelWidth:'110px',
  count:9,
  disabled:true
}]

//评价
export const riskEvaluate=[{
  label:'评价星级',
  name:'rate',
  el:'rate',
  disabled:true
},{
  label:'评价',
  name:'evaluate',
  el:'textarea',
  disabled:true
},]