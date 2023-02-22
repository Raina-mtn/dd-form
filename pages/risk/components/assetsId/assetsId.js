import { createForm } from 'antd-mini/es/Form/form';


Component({
  mixins: [createForm()],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  methods: {
    onScanning(){
      // dd.scan({
      //   type: 'qr',
      //   success: (res) => {
      //     this.setData({
      //       ['formData.id']:JSON.parse( res.code).code,
      //       ['formData.name']:JSON.parse( res.code).name,
      //     })
      //   },
      // })
    },
    onChange(value){
      this.emit('onChange', value);
    }
  },
});
