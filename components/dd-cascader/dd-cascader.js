import { createForm } from 'antd-mini/es/Form/form';
import {formatOptions,searchParent} from './utils'

Component({
  mixins: [createForm()],
  data: {
    list:[{}],
    value:null,
  },
  async didMount() {
    let list = [{}]
    list = this.props.options || await this.props.getList()||[{}]
    list=formatOptions(list,this.props.valueKey||{label:'label',value:'value',children:'children'})
    this.setData({list})
    // const value =this.props.onlyLast?searchParent(this.data.formData.value,list,this.props.valueKey):value
    // this.setData({value})
  },
  methods: {
    cascaderChange(value,obj,e){
      this.emit('onChange',value);
      const optionsObj = this.data.list.find(i=>{
        return i[this.props.valueKey.value]===value[value.length-1]
      })
      this.props.onFormChange(this.props.name,value,optionsObj||{},this);
    },
    cascaderFormat(value,column){
      if(this.props.join){
        return column&&column.map((c) => c && c.label).join(this.props.join)
      }else{
        return column&&column.map((c) => c && c.label).join('/');
      }
    }
  },
});
