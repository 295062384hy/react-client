import ajax from './ajax'
const BASE=''
export  const reqRegister=({username,password,type})=>ajax(BASE+'/register',{username,password,type},'POST')
export  const reqLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')