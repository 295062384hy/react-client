export function getRedirectPath (type,header) {
  let path=""
  if(type==='lanban'){
    path='/laoban'
  }else{
    path='/dashen'
  }
  if(!header){
    path+='info'
  }
  return path
}