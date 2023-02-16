import { Form } from 'antd-mini/es/Form/form';

Component({
  mixins: [],
  onInit() {
    this.form = new Form();
    console.log('this.props',this.props);
    this.form.setInitialValues(this.props.initialValues);//初始值
    this.form.reset();//重置表单为初始值
  },
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
});
