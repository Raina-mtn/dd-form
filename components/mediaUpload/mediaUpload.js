Component({
  mixins: [],
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
  
  didMount() {
    console.log('props',this.props);
  },
  didUpdate(prevProps,prevData) {
    if(prevData.fileList.length !== this.data.fileList.length){
      console.log('prevData',prevData);
      console.log('this.props.onFileListChange',this.props.onFileListChange);
      this.props.onFileListChange(this.props.column.name,this.data.fileList)
      console.log('media name',this.props.column.name);
    }
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
    uploadFile(filePath,index,type){
      my.uploadFile({
        url: 'http://172.19.3.40:8093/upload/image',
        fileName: 'file',
        name:'imgFile',
        filePath: filePath,
        fileType:'image',
        header:{
          token:'eyJ0eXAiOiJKV1QiLCJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJyYW5kb20iOjc2MDcyMzQ5MCwiZXhwIjoxNjc2MjYzMzUwLCJpYXQiOjE2NzYwMDQxNTAsImFjY291bnQiOiJhZG1pbiIsInN0YXR1cyI6Ik5PUk1BTCJ9.iK9fseKS_3W8pvF1zBnA9yYjbj0Huk8_hf_2CZ4Eddg'
        },
        success: (res) => {
          this.setData({
            [`fileList[${index}]`]:{url:JSON.parse(res.data).data,status:'success',type:type}
          })
        },
        fail: function(error) {
          my.showToast({
            type: 'error',
            content: '上传失败！',
            duration: 2000
          });
          const newFileList = this.data.fileList.splice(index-1,1)
          this.setData({
            fileList:newFileList
          })
        },
      });
    },
    handleAction(item,index,event){
      const action =item.key==='image'?'chooseImage':'chooseVideo'
      const option ={
        count:this.props.column.count||1,
        success:item.key==='image'?
          ({apFilePaths})=> {
            apFilePaths.map(i=>{
              const index = this.data.fileList.length
              this.setData({
                [`fileList[${index}]`]:{status:'uploading',type:item.key}
              })
              this.uploadFile(i,index,item.key)
            })
          }:
            ({tempFilePath})=> {
              const index = this.data.fileList.length
              this.setData({
                [`fileList[${index}]`]:{status:'uploading',type:item.key}
              })
              this.uploadFile(tempFilePath,index,item.key)
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
      this.setData({
        fileList:newFileList
      })
    }
  },
});
