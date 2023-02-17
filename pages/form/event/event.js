Page({
  data: {
    formData:{},
    columns:[{
      label:'线路',
      name:'line',
      required:true,
      el:'picker',
      options:[
        { label: '四号线', value: '4' },
        { label: '五号线', value: '5' },
      ],
    },{
      label:'车/站/段/所',
      name:'station',
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
      label:'事件概述',
      name:'textarea',
      required:true,
      allowClear:true,
      el:'textarea'
    },{
      label:'可能的影响',
      name:'affect',
      required:true,
      el:'picker',
      options:[
        { label: '行车安全', value: '0' },
        { label: '乘客服务', value: '1' },
        { label: '人员伤害', value: '2' },
        { label: '其他', value: '3' },
      ],
    },{
      label:'事件发现人',
      name:'discoverName',
      required:true,
      allowClear:true,
      el:'input'
    },{
      label:'发现人电话',
      name:'discoverTel',
      required:true,
      allowClear:true,
      el:'input'
    },{
      label:'事件报告人',
      name:'reportName',
      required:true,
      allowClear:true,
      el:'input'
    },{
      label:'报告人部门',
      name:'reportDev',
      required:true,
      allowClear:true,
      el:'input'
    },{
      label:'事件创建时间',
      name:'creatTime',
      required:true,
      precision:'second',
      el:'date',
      format:"YYYY-MM-DD HH:mm:ss",
    },{
      label:'事件提报时间',
      name:'reportTime',
      required:true,
      precision:'second',
      el:'date',
      format:"YYYY-MM-DD HH:mm:ss",
    },{
      label:'图片',
      name:'media',
      required:true,
      el:'media',
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
      title: '事件提报'})
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
