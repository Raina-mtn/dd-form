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
  didMount() {
    new Promise((resolve, reject)=>{
      resolve()
    }).then(()=>{
      if(this.data.formData.value){
        const fileList = this.data.formData.value.split(',')
        this.setData({fileList})
        console.log('fileList',this.data.fileList);
      }
    })
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
      const Authorization = dd.getStorageSync({key: 'Authorization'}).data
      my.uploadFile({
        url: `${this.props.fileUrl}/upload/image`,
        fileName: 'file',
        name:'imgFile',
        filePath: filePath,
        fileType:'image',
        header:{Authorization:Authorization},
        success: (res) => {
            const length = this.data.fileList.length
            const fileList = JSON.parse(JSON.stringify(this.data.fileList))
            fileList.pop()
            fileList.push(JSON.parse(res.data).data)
            // this.setData({
            //   [`fileList[${length-1}]`]:JSON.parse(res.data).data
            // })
            this.setData({fileList})
            console.log('fileList',this.data.fileList);
          },
        fail: (error)=> {
          my.showToast({
            type: 'error',
            content: '上传失败！',
            duration: 2000
          });
          let newFileList = JSON.parse(JSON.stringify(this.data.fileList))
          newFileList.pop()
          this.setData({
            fileList:newFileList
          })
        },
        complete:()=>{
          console.log('complete');
          this.emit('onChange', this.data.fileList.join());
          console.log('this.data.fileList.join()',this.data.formData);
        }
      });
    },
    handleAction(item){
      const action =item.key==='image'?'chooseImage':'chooseVideo'
      const option ={
        count:this.props.count||1,
        success:item.key==='image'?
          ({apFilePaths})=> {
            console.log('apFilePaths',apFilePaths);
            apFilePaths.map(i=>{
              let newList = JSON.parse(JSON.stringify(this.data.fileList))
              newList.push('')
              this.setData({'fileList':newList})
              this.uploadFile(i)
            })
          }:
            ({tempFilePath})=> {
              let newList = JSON.parse(JSON.stringify(this.data.fileList))
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
      const newFileList = JSON.parse(JSON.stringify(this.data.fileList))
      newFileList.splice(e.target.dataset.index,1)
      this.setData({fileList:newFileList})
      this.emit('onChange', this.data.fileList);
    },
    handlePreview(e){
      dd.previewImage({
        urls: [`${this.props.fileUrl}${e.target.dataset.url}`]
      });
    }
  },
});
