import { createForm } from 'antd-mini/es/Form/form';
import {formatOptions} from './utils.js'

Component({
  mixins: [createForm()],
  data: {
    list:[],
    currentOpen: false,
    currentLabel:[],
  },
  async didMount() {
    let list = []
    if(this.props.options){
      list = this.props.options
    }else{
      list = await this.props.getList()
    }
    list=formatOptions(list,this.props.valueKey||{text:'text',value:'value'})
    this.setData({list})
    
    new Promise((resolve, reject)=>{
      resolve()
    }).then(()=>{
      if(this.data.formData.value){
        const formData = this.data.formData.value.split(',')
        this.setData({['this.data.formData.value']:formData})
        
        const list = this.data.list
        const currentLabel =formData.map(item=>{
          const currenItem = list.find(i=>{
            return i[this.props.valueKey.value||'value']==item
          })
          return currenItem[this.props.valueKey.text||'text']
        })
        this.setData({currentLabel})
      }
    })
    
  },
  didUnmount() {},
  methods: {
    selectChange(value,obj,e){
      this.emit('onChange', value);
      this.props.onFormChange(this.props.name,value,obj);
      
      const formData = this.data.formData.value
      const list = this.data.list
      const currentLabel =formData.map(item=>{
        const currenItem = list.find(i=>{
          return i[this.props.valueKey.value||'value']===item
        })
        return currenItem[this.props.valueKey.text||'text']
      })
      this.setData({currentLabel})
    },
    onTapItem(e) {
      const currentOpen = this.data.currentOpen
      this.setData({ currentOpen:!currentOpen});
    },
  },
});
