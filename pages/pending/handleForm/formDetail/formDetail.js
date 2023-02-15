import {geFormMock,geProgressMock} from '/api/interface/mock'
import {riskProgress} from './config.sjs'

Page({
  data: {
    progress:[],
    nextProgress:'',
    popupVisible:false,
    step:[],
    form:[],
    isDone:false,
  },
  onLoad(options){
    this.setData({'isDone':options.isDone})
    geFormMock({id:options.id}).then((res)=>{
      this.setData({'form':res.data})
    })
    geProgressMock({id:options.id}).then((res)=>{
      this.setData({'step':res.data})
      const progress = res.data.map((v,index)=>riskProgress[index].value)
      this.setData({progress})
      this.setData({'nextProgress':riskProgress[res.data.length].value})
    })
  },
  handleTap(){
    my.navigateTo({
      url:`/pages/pending/handleForm/formDetail/pages/handle/handle?nextProgress=${this.data.nextProgress}`
    })
  },
  rejectTap(){
    my.navigateTo({
      url:'/pages/pending/handleForm/formDetail/pages/reject/reject'
    })
  },
  processTap(){
    this.setData({popupVisible:true})
  },
  handlePopupClose(){
    this.setData({popupVisible:false})
  },
});