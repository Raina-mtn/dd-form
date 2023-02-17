import { createForm } from 'antd-mini/es/Form/form';

Component({
  mixins: [createForm()],
  data: {
    visible:false,
    actions:[
      {
        text: '图片',
        key: 'image',
      },
      {
        text: '视频',
        key: 'video',
      }
    ],
    fileList:[],
  },
  props: {
    column:{},
    onFileListChange:()=>{},
    disabled:false
  },
  didUnmount() {},
  methods: {
    mediaUpload(){
      this.setData({
        visible:true
      })
    },
    handleCloseBasic(){
      this.setData({
        visible:false
      })
    },
    uploadFile(filePath){
      my.uploadFile({
        url: 'http://172.19.3.40:8093/upload/image',
        fileName: 'file',
        name:'imgFile',
        filePath: filePath,
        fileType:'image',
        header:{
          token:'eyJ0eXAiOiJKV1QiLCJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJyYW5kb20iOjI1MDI4OTcyOSwiZXhwIjoxNjc2Nzg5MTI1LCJpYXQiOjE2NzY1Mjk5MjUsImFjY291bnQiOiLlsI_njosiLCJzdGF0dXMiOiJOT1JNQUwifQ.zs-wnVILuGdTHJj0u9DUeuS5Hsj_6Jg3yzlKuysB6JQ'
        },
        success: (res) => {
          const length = this.data.fileList.length
          this.setData({
            [`fileList[${length-1}]`]:JSON.parse(res.data).data
          })
        },
        fail: (error)=> {
          my.showToast({
            type: 'error',
            content: '上传失败！',
            duration: 2000
          });
          let newFileList = this.data.fileList
          newFileList.pop()
          this.setData({
            fileList:newFileList
          })
        },
        complete:()=>{
          this.emit('onChange', this.data.fileList);
        }
      });
    },
    handleAction(item){
      const action =item.key==='image'?'chooseImage':'chooseVideo'
      const option ={
        count:this.props.column.count||1,
        success:item.key==='image'?
          ({apFilePaths})=> {
            apFilePaths.map(i=>{
              let newList = this.data.fileList
              newList.push('')
              this.setData({'fileList':newList})
              this.uploadFile(i)
            })
            
          console.log('1')
          }:
            ({tempFilePath})=> {
              let newList = this.data.fileList
              newList.push('')
              this.setData({'fileList':newList})
              this.uploadFile(tempFilePath)
            }
            ,
        fail:({error})=>{
          if(error!==11)
            my.showToast({
              type: 'error',
              content: `该${item.key==='image'?'图片':'视频'}无法选择！`,
              duration: 2000
            });
        }
      }
      dd[action](option)
    },
    removeFile(e){
      const newFileList = this.data.fileList
      newFileList.splice(e.target.dataset.index,1)
      this.setData({fileList:newFileList})
      this.emit('onChange', this.data.fileList);
    },
    handlePreview(e){
      console.log('e',e);
      dd.previewImage({
        urls: [`http://172.19.3.40:8093${e.target.dataset.url}`]
      });
    }
  },
});
