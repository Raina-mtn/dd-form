import { createForm } from 'antd-mini/es/Form/form';

Component({
  mixins: [createForm()],
  data: {
    fileList:[{
      fileId: "96681992036",
      fileName: "1312323sdfgbdsdasfsDZFFSDASFGTHDS12.xlsx",
      fileSize: 9068,
      fileType: "xlsx",
      spaceId: "7272757090",
    },{
      fileId: "96681992036",
      fileName: "13123132.xlsx",
      fileSize: 9068,
      fileType: "xlsx",
      spaceId: "7272757090",
    }]
  },
  props: {
    column:{}
  },
  didMount() {
    console.log('column',this.props.column.max);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleUpload(){
      dd.uploadAttachmentToDingTalk({
        space:{spaceId:"12345",max:this.props.column.max||1},
        file: {spaceId:"12345",max:this.props.column.max||1},
        types:["file","space"],//PC端仅支持["photo","file","space"]
        success: (res) => {
          console.log('res',res);
          const fileList = this.data.fileList
          this.setData({fileList:fileList.concat(res.data)})
          this.emit('onChange', this.data.fileList);
          // this.emit('onChange', {spaceId,fileId})
           /*
           {
              type:'', // 用户选择了哪种文件类型 ，image（图片）、file（手机文件）、space（钉盘文件）
              data: [
                 {
                   spaceId: "232323",
                   fileId: "DzzzzzzNqZY",
                   fileName: "审批流程.docx",
                   fileSize: 1024,
                   fileType: "docx"
                }
              ]
           }
            */
        },
        fail: (err) =>{
            dd.alert({
                content:JSON.stringify(err)
            })
        }
    }) 
    },
    removeFile(e){
      const fileList = this.data.fileList
      fileList.splice(e.target.dataset.index,1)
      this.setData({fileList})
      this.emit('onChange', this.data.fileList);
    },
    handlePreview(e){
      dd.previewFileInDingTalk({  //预览
        spaceId:'12345',
        fileId:e.target.dataset.file.fileId,
        fileName:e.target.dataset.file.fileName,
        fileSize:e.target.dataset.file.fileSize,
        fileType:e.target.dataset.file.fileType,
        success: (res) => {
          console.log(res)
        },
        fail: (err) =>{
          console.log(err)
        }
    })
  }
}
});
