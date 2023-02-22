import { Form } from 'antd-mini/es/Form/form';

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
    }
  },
});
