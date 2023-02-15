Page({
  data: {
    // columns:[{
    //   label:'输入框',
    //   name:'input',
    //   el:'input'
    // },{
    //   label:'复输入框',
    //   name:'textarea',
    //   el:'textarea'
    // },{
    //   label:'选择',
    //   name:'select',
    //   el:'select',
    //   options:[
    //     { text: '选项一', value: '1' },
    //     { text: '选项二', value: '2' },
    //     { text: '选项三', value: '11' },
    //   ],
    //   multiple:true
    // },{
    //   label:'单选',
    //   name:'radio',
    //   el:'radio',
    //   options:[
    //     { label: '选项一', value: '1' },
    //     { label: '选项二', value: '2' },
    //   ]
    // },{
    //   label:'时间',
    //   name:'date',
    //   el:'date',
    //   format:'YYYY-MM-DD',
    // },{
    //   label:'时间范围',
    //   name:'daterange',
    //   el:'daterange',
    //   format:'YYYY-MM-DD',
    // },{
    //   label:'上传图片/视频',
    //   name:'media',
    //   el:'media',
    //   count:9,
    //   tip:'最多可上传九张图片/视频'
    // },{
    //   label:'计数器',
    //   name:'stepper',
    //   el:'stepper',
    // },{
    //   label:'开关',
    //   name:'switch',
    //   el:'switch',
    // },{
    //   label:'评分',
    //   name:'rate',
    //   el:'rate',
    // },{
    //   label:'插槽',
    //   name:'slot',
    //   el:'slot',
    // },{
    //   label:'',
    //   name:'btns',
    //   el:'slot',
    // }],
    formData:{},
    levelOptions:[{ 
      label: 'A', 
      value: 'A' 
    },{ 
      label: 'B', 
      value: 'B' 
    },{ 
      label: 'C', 
      value: 'C' 
    },{ 
      label: 'D', 
      value: 'D' 
    }],
    columns:[{
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
    },{
      label:'',
      name:'tip',
      el:'slot',
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
      labelWidth:'110px',
      el:'media',
      count:9,
      tip:'最多可上传九张图片/视频'
    },{
      label:'',
      name:'btns',
      el:'slot',
    }],
  },
  onLoad() {
    dd.setNavigationBar({
      title: '故障工单'})
  },
  submit(){
    dd.showToast({
      type: 'success',
      content: '提交成功！',
      duration: 1000,
      success: () => {
        my.switchTab({
          url: '/pages/home/home'
        })
      }
    })
  },
  temporary(){
    dd.showToast({
      type: 'success',
      content: '暂存成功！',
      duration: 1000,
      success: () => {
        my.switchTab({
          url: '/pages/home/home'
        })
      }
    })
  },
  onFormChange(i,value){
    console.log('i',i);
    this.setData({
      [`formData.${i}`]:value
    })
  },
  onInputChange(value,e){
    this.setData({
      [`formData.${e.target.dataset.name}`]:value
    })
  },
  onPickerChange(value,column,e){
    this.setData({
      [`formData.${e.target.dataset.name}`]:value
    })
  },
  onScanning(){
    dd.scan({
      type: 'qr',
      success: (res) => {
        this.setData({
          ['formData.id']:JSON.parse( res.code).code,
          ['formData.name']:JSON.parse( res.code).name,
        })
      },
    })
  }
});
