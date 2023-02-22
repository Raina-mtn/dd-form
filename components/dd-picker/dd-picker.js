import { createForm } from 'antd-mini/es/Form/form';
import {formatOptions} from './utils'

Component({
  mixins: [createForm()],
  data: {
    list:[]
  },
  async didMount() {
    if(this.props.column.options){
      this.setData({list:this.props.column.options})
    }else{
      this.setData({list:await this.props.column.getList()})
    }
    formatOptions(this.data.list,this.props.column.valueKey||{label:'label',value:'value'})
  },
  didUnmount() {},
  methods: {
    pickerChange(value,column,e){
      this.emit('onChange', value);
      this.props.onFormChange(this.props.column.name,value,column);
    }
  },
});
