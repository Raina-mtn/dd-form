import {getOptionsMock} from '/api/interface/mock'

Page({
  data: {
    formData:{},
    columns:[{
      label:'资产编码',
      name:'id',
      required:true,
      el:'slot'
    },{
      label:'线路',
      name:'line',
      required:true,
      el:'picker',
      getList:async ()=>(await(getOptionsMock().then(res=>res.data)))

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
      el:'switch',
    },{
      label:'上传图片/视频',
      name:'media',
      labelWidth:'110px',
      el:'media',
      required:true,
      count:9,
      tip:'最多可上传九张图片/视频'
    },{
      label:'',
      name:'btns',
      el:'slot',
    }],
    model:''
  },
  formItems: [],
  handleFormJSONRef(ref) {
    this.formItems.forEach(formItem => {
      ref.form.addItem(formItem);
    });
    this.ref=ref
  },
  handleRef(ref) {
    this.formItems.push(ref);
  },
  onLoad() {
    this.formItems=[]
    this.setData({'model':getApp().globalData.model})
    dd.setNavigationBar({
      title: '故障工单'})
  },
  async submit(){
    const values = await this.ref.form.submit();
    console.log('values',values);
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
  },
  onChange(value){
    this.emit('onChange', value);
  }
  
});
