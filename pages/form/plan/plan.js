Page({
  data: {
    formData:{},
    columns:[{
      label:'检修计划编码',
      name:'id',
      required:true,
      allowClear:true,
      el:'input'
    },{
      label:'检修名称',
      name:'name',
      required:true,
      allowClear:true,
      el:'input'
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
      label:'维修周期',
      name:'period',
      required:true,
      el:'stepper',
    },{
      label:'周期单位',
      name:'unit',
      required:true,
      el:'picker',
      options:[{
        label: '日',
        value:'Day',
      },
      {
        label: '周',
        value:'Week',
      },
      {
        label: '月',
        value:'Month',
      },
      {
        label: '季',
        value:'Season',
      },
      {
        label: '年',
        value:'Year',
      },]
    },{
      label:'开始时间',
      name:'startTime',
      required:true,
      precision:'second',
      el:'date',
      format:"YYYY-MM-DD HH:mm:ss",
    },{
      label:'上传文件',
      name:'fileUpload',
      required:true,
      el:'slot',
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
      title: '计划检修工单'})
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
