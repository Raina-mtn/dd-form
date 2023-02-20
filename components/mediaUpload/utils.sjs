const isVideo = (url)=>{
  const videolist = ['mp4', 'm2v', 'mkv']
  var urlArr = url.split('.');
  const suffix = urlArr[urlArr.length - 1];
  return videolist.some(v=>v===suffix)
}

export default {
  isVideo
};