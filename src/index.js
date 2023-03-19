import { Form } from 'antd-mini/es/Form/form';
import dayjs from 'dayjs'

Component({
  mixins: [],
  async onInit() {
    this.form = new Form({
      initialValues:this.props.initialValues
    });
    this.form.reset();//重置表单为初始值
    this.props.columns.map(i=>{
      if(!['picker','cascader','selector'].includes(i.el)){
        this.form.onValueChange(i.name,(value)=>{
          this.formChange(i.name,value)

          if(i.el==='daterange'){
            this.form.setFieldValue(i.name,value.map(date=>dayjs(date).format(i.format)))
          }else if(i.el==='date'){
            this.form.setFieldValue(i.name,dayjs(value).format(i.format))
          }
        })
      }
    })
  },
  methods:{
    handleRef(ref) {
      this.form.addItem(ref);
    },
    formChange(name,value,obj,node){
      this.props.onFormChange&&this.props.onFormChange(name,value,obj,node)
    },
    inputSerachChange(value,e){
      this.props.onInputSearch&&this.props.onInputSearch(e.target.dataset.column.name,value,e.target.dataset.column)
    },
    // reset(){
    //   console.log('form',this.form);
    //   this.form.reset()
    // }
  },
});
