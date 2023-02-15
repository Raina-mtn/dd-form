import {riskForm} from '../config.sjs'

Component({
  mixins: [],
  data: {
    columns:riskForm,
  },
  props: {
    formData:{}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(){
      dd.previewImage({
        urls: [
          'http://172.19.3.40:8093/upload-image/9db7635b50d743dab3a2e90275dd9a8e.png',
        ],
      });
    }
  },
});
