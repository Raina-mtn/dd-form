import {getOptionsMock} from '/api/interface/mock'

Page({
  data: {
    formData:{},
    columns:[{
      name:'id'
    },{
      label:'线路',
      name:'line',
      el:'radio',
      getList:async ()=>(await(getOptionsMock().then(res=>res.data)))

    },{
      label:'详细位置',
      name:'textarea',
      allowClear:true,
      el:'textarea'
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
  },
  async submit(){
    const values = await this.ref.form.submit();
    console.log('values',values);
  },
  temporary(){
  },
  onScanning(){
    // dd.scan({
    //   type: 'qr',
    //   success: (res) => {
    //     this.setData({
    //       ['formData.id']:JSON.parse( res.code).code,
    //       ['formData.name']:JSON.parse( res.code).name,
    //     })
    //   },
    // })
  },
  onChange(value){
    this.emit('onChange', value);
  }
  
});
