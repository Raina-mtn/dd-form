import { createForm } from 'antd-mini/es/Form/form';
import {formatOptions} from './utils'

Component({
  mixins: [createForm()],
  data: {
    list:[]
  },
  async didMount() {
    let list = []
    if(this.props.options){
      list = this.props.options
    }else{
      list = await this.props.getList()
    }
    list=formatOptions(list,this.props.valueKey||{label:'label',value:'value'})
    this.setData({list})
  },
  didUnmount() {},
  methods: {
    pickerChange(value,obj,e){
      this.emit('onChange', value);
      const optionsObj = this.data.list.find(i=>{
        return i[this.props.valueKey?this.props.valueKey.value:'value']===value
      })
      this.props.onFormChange(this.props.name,value,optionsObj);
    }
  },
});
