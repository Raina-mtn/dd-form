import { Form } from 'antd-mini/es/Form/form';

Component({
  mixins: [],
  data: {
    form: new Form(),
  },
  props: {
    title:'',
    columns:[],
    formData:{},
    onFormChange:()=>{},
  },
  didMount() {
    console.log('columns',this.props.columns);
    Object.keys(this.props.formData).map(i=>{
      this.data.form.setFieldValue(i,this.props.formData[i])
    })
    this.props.columns.map(i=>{
      this.data.form.onValueChange(i.name,(value)=>{
        this.props.onFormChange(i.name,value)
      })
    })
  },
  didUpdate() {
    Object.keys(this.props.formData).map(i=>{
      this.data.form.setFieldValue(i,this.props.formData[i])
    })
    this.props.columns.map(i=>{
      this.data.form.onValueChange(i.name,(value)=>{
        this.props.onFormChange(i.name,value)
      })
    })
  },
  didUnmount() {},
  onChange(name,value){
    console.log('form name',name);
    
    this.props.onFormChange(name,value)
  }
});
