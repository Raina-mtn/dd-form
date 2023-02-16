import {riskDispatch} from '../config.sjs'
import { Form } from 'antd-mini/es/Form/form';

Component({
  mixins: [],
  data: {
    form: new Form(),
    columns:riskDispatch,
    options:[
      { label: '供电班组1', value: '0',name:'小王',tel:'13402255220' },
      { label: '供电班组2', value: '1',name:'小张',tel:'18422255220' },
    ],
    formData:{}
  },
  props: {},
  didMount() {
    this.data.form.onValueChange('group',(value)=>{
      const group = this.data.options.filter(i=>i.value === value)[0]
      this.data.form.setFieldValue('groupName',group.name)
      this.data.form.setFieldValue('groupTel',group.tel)
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleRef(ref) {
      this.data.form.addItem(ref);
    },},
});
