Page({
  data: {
    columns:[{
      label:'延期时间',
      name:'delayTime',
      el:'date',
      format:'YYYY-MM-DD HH:mm:ss',
      precision:'second'
    },{
      label:'延期原因',
      name:'reason',
      el:'textarea'
    }]
  },
  onLoad() {},
});
