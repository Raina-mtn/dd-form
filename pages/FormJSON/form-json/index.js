import { Form } from 'antd-mini/es/Form/form';


Component({
  onInit() {
    this.form = new Form();
    this.form.setInitialValues(this.props.config.initialValues);//初始值
    this.form.reset();//重置表单为初始值
  },
  
  methods: {
    handleRef(ref) {
      this.form.addItem(ref);
    },
    async submit() {
      const values = await this.form.submit();
      this.props.onSuccess(values);
    },
    reset() {
      this.form.reset();
    },
  }
});
