Component({
  mixins: [],
  data: {
    value:''
  },
  props: {
    column:{},
    form:null,
    onChange:()=>{},
  },
  didMount() {
    console.log('form',this.props.form);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleRef(ref) {
      this.props.form.addItem(ref);
    },
    // handleItemChange(value){
    //   this.props.onChange(this.props.column.name,value)
    // },
    // dateChange(date,dateStr,dateArr){
    //   this.props.onChange(this.props.column.name,dateStr)
    // },
    onFileListChange(name,fileList){
      console.log('item name',name);
      // this.props.onChange(name,fileList)
    },
    cascaderFormat(value, column) {
      return column && column.map(i=>i.label).join(this.props.column.join)
    },
  },
});
