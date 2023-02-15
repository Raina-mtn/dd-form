Component({
  mixins: [],
  data: {
  },
  props: {
    title:'',
    status:'',
    grade:'',
    reportTime:'',
    isExceed:false,
    detail:'',
    url:'',
    type:'pending'
  },
  didMount() {
    console.log('detail',this.props.detail);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleTap(e) {
      my.navigateTo({
        url:this.props.url
      })
    },
    onDelay(e){
      my.navigateTo({
        url:'/pages/pending/handleForm/formDetail/pages/delay/delay'
      })
    }
  },
});
