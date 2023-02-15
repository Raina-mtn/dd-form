Component({
  mixins: [],
  data: {
    expand: true
  },
  props: {
    title:''
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    toggleExpand(){
      this.setData({expand:!this.data.expand})
      console.log('this.data.expand',this.data.expand);
    }
  },
});
