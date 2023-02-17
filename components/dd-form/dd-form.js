import { Form } from 'antd-mini/es/Form/form';

Component({
  mixins: [],
  onInit() {
    this.form = new Form();
    this.form.setInitialValues(this.props.initialValues);//初始值
    this.form.reset();//重置表单为初始值
  },
  methods:{
    handleRef(ref) {
      this.form.addItem(ref);
    },
  },
});
