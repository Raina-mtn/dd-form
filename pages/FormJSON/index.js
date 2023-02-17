Page({
  data: {
    columns: [
      {
        el: 'input',
        label: '用户名',
        name: 'account',
        placeholder: '请输入用户名',
        required: true,
        message: '提交需要有用户名',
      },
      {
        el: 'input',
        label: '地址',
        name: 'address',
        placeholder: '请输入地址',
        required: true,
        message: '提交需要有地址',
      },
      {
        el: 'media',
        label: '上传图片',
        count:9,
        name: 'media',
      },
      {
        el: 'slot',
        label: '需要小票',
        name: 'choose',
        required: true,
        message: '提交需要有数量',
      },{
        el: 'slot',
        label: '时间',
        name: 'date',
        required: true,
        message: '提交需要有数量',
      },
      {
        el: 'slot',
        label: '',
        name: 'btns',
      },
    ],
    initialValues: {
      account: 'lily'
    },
  },
  onLoad() {
  },
  formItems: [],
  handleFormJSONRef(ref) {
    this.formItems.forEach(formItem => {
      ref.form.addItem(formItem);
    });
    this.ref=ref
  },
  handleRef(ref) {
    this.formItems.push(ref);
  },
  async onSuccess() {
    const values = await this.ref.form.submit();
    console.log('values',values);
  },
});
