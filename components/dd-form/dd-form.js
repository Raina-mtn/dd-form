import { Form } from 'antd-mini/es/Form/form';
import dayjs from 'dayjs'

Component({
  mixins: [],
  onInit() {
    this.form = new Form();
    this.form.setInitialValues(this.props.initialValues);//初始值
    this.form.reset();//重置表单为初始值
    this.props.columns.map(i=>{
      if(i.el!=='picker'){
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
    cascaderFormat(value,column){
      return column&&column.map((c) => c && c.label).join('/');
    },
    formChange(name,value,obj){
      this.props.onFormChange&&this.props.onFormChange(name,value,obj)
    },
    inputSerachChange(value,e){
      this.props.onInputSearch&&this.props.onInputSearch(e.target.dataset.column.name,value,e.target.dataset.column)
    },
  },
});
