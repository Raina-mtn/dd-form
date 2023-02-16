//故障工单-提报
export const riskForm=[{
  label:'资产编码',
  name:'id',
  required:true,
  el:'slot'
},{
  label:'资产名称',
  name:'name',
  required:true,
  allowClear:true,
  el:'input'
},{
  label:'线路',
  name:'line',
  required:true,
  el:'picker',
  options:[
    { label: '四号线', value: '4' },
    { label: '五号线', value: '5' },
  ],
},{
  label:'区域',
  name:'area',
  required:true,
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
  ]
},{
  label:'详细位置',
  name:'textarea',
  required:true,
  allowClear:true,
  el:'textarea'
},{
  label:'故障等级',
  name:'level',
  required:true,
  el:'picker',
  options:[
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' }
  ],
  help:`提示:
  A类: 影响行车安全、人身安全、设施设备安全，或影响行车效率、客运服务质量程度严重，或造成社会舆论影响、损害地铁形象，或可能造成上述影响的设施设备故障。 要求修复时间：24小时（1天）
  B类： 影响行车效率、客运服务质量程度一般的设施设备故障。 要求修复时间：24小时（1天）
  C类： 除a、b、d类以外其他类设施设备故障。 要求修复时间：120小时（5天）
  D类： 不影响运营安全、生产效率、服务质量和设施设备可靠性，宜通过集中整治方式修复的故障，以及食堂设备，办公设备类故障。 要求修复时间：168小时（7天）
  `
},{
  label:'故障现象',
  name:'detail',
  required:true,
  allowClear:true,
  el:'textarea'
},{
  label:'专业调度',
  name:'dispatch',
  required:true,
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
},{
  label:'故障类型',
  name:'type',
  required:true,
  el:'picker',
  options:[
    { label: '行车安全', value: '0' },
    { label: '乘客服务', value: '1' },
    { label: '人员伤害', value: '2' },
    { label: '其他', value: '3' }
  ],
},{
  label:'是否停用',
  name:'stop',
  required:true,
  el:'switch',
},{
  label:'上传图片/视频',
  name:'media',
  required:true,
  el:'media',
  count:9,
  tip:'最多可上传九张图片/视频'
},{
  label:'',
  name:'btns',
  el:'slot',
}]

//故障工单-调度
export const riskDispatch=[{
  label:'处理班组',
  name:'group',
  el:'picker',
  options:[
    { label: '供电班组1', value: '0' },
    { label: '供电班组2', value: '1' },
  ]
},{
  label:'负责人',
  name:'groupName',
  el:'input'
},{
  label:'联系方式',
  name:'groupTel',
  el:'input'
},{
  label:'要求修复时间',
  name:'finishTime',
  el:'slot',
  format:'YYYY-MM-DD HH:mm:ss',
  precision:'second',
},]

//故障工单-班组
export const riskGroup=[{
  label:'班组确认人',
  name:'confirmName',
  el:'input',
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
},{
  label:'故障详情',
  name:'groupDetail',
  el:'textarea',
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
},{
  label:'工班完成时间',
  name:'time',
  el:'date',
  format:'YYYY-MM-DD HH:mm:ss',
  precision:'second',
},{
  label:'备注',
  name:'remark',
  el:'textarea',
},{
  label:'班组处理照片',
  name:'media',
  el:'media',
  labelWidth:'110px',
  count:9,
}]

//故障工单-评价
export const riskEvaluate=[{
  label:'评价星级',
  name:'rate',
  el:'rate',
},{
  label:'评价',
  name:'evaluate',
  el:'textarea',
},]