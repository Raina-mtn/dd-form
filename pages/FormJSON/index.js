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
        el: 'slot',
        label: '水果',
        name: 'fruit',
        placeholder: '请输入数量',
        required: true,
        message: '提交需要有数量',
      },
      {
        el: 'stepper',
        label: '数量',
        name: 'quantity',
        placeholder: '请输入数量',
        required: true,
        message: '提交需要有数量',
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
    // this.setData({
    //   config: {
    //     initialValues: {
    //       account: 'lily'
    //     },
    //     submit: {
    //       text: '提交',
    //       type: 'primary',
    //       style: 'margin: 12px',
    //     },
    //     reset: {
    //       text: '重置',
    //       type: 'default',
    //       style: 'margin: 12px',
    //     },
    //   },
    // });
  },
  formItems: [],
  handleFormJSONRef(ref) {
    this.formItems.forEach(formItem => {
      ref.form.addItem(formItem);
    });
  },
  handleRef(ref) {
    this.formItems.push(ref);
  },
  onSuccess(values) {
    my.alert({
      title: '提交',
      content: JSON.stringify(values, null, 2),
    });
  },
});
