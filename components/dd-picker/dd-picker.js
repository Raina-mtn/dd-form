import { createForm } from 'antd-mini/es/Form/form';
import {formatOptions} from './utils'

Component({
  mixins: [createForm()],
  data: {
    list:[]
  },
  async didMount() {
    if(this.props.options){
      this.setData({list:this.props.options})
    }else{
      this.setData({list:await this.props.getList()})
    }
    formatOptions(this.data.list,this.props.valueKey||{label:'label',value:'value'})
  },
  didUnmount() {},
  methods: {
    pickerChange(value,obj,e){
      this.emit('onChange', value);
      this.props.onFormChange(this.props.name,value,obj);
    }
  },
});
