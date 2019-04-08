// 校验标题等 不为空
export function checkTitle(rule, value, callback,tips) {
  if (!value) {
    callback(new Error(tips))
  }
  callback()  
}

// 校验原创、转载类型 必须一个
export function checkOriginal(rule, value, callback, other) {
  if (!value) {
    callback(new Error('请选择类型'))
  }
  if(value==2 && other==''){
      callback(new Error('请输入转载网址'))
  }
  callback() 
}

// 上传图片，支持jpg、jpeg、png、gif
export function doImgUpload(file) {
  const isJPG = file.type.includes('jpg');
  const isJPEG = file.type.includes('jpeg');
  const isPNG = file.type.includes('png');
  const isGIF = file.type.includes('gif');
  const isLt2M = file.size / 1024 / 1024 < 1;
  if(!isJPG && !isJPEG && !isPNG && !isGIF){
      this.$message.error('请上传jpg,png,gif格式的图片');
  }
  if (!isLt2M) {
      this.$message.error('上传图片大小不能超过 1MB!');
  }
  // return isJPG && isLt2M ;
  return isLt2M && (isJPEG || isPNG || isJPG);
}