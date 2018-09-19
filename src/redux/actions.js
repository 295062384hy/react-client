import {reqRegister,reqLogin,reqUpdateUser} from  '../api'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from  './action-types'

const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user})
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})
const receiveuser=(user)=>({typr:RECEIVE_USER,data:user})
const resetuser=(msg)=>({type:RESET_USER,data:msg})

export function updateUser(user) {
  return dispatch=>{
    reqUpdateUser(user).then(res=>{
      const result=res.data
      if(result.code===0){
        const user=result.data
        dispatch(receiveuser(user))
      }else {
        const msg=result.msg
        dispatch(resetuser(msg))
      }
    })
  }
}
/*
注册的异步action
 */
export function register({username,password,type}) {
  return dispatch=>{
    reqRegister({username,password,type}).then(res=>{
      const result=res.data
      if(result.code===0){
        const user=result.data
        dispatch(authSuccess(user))
      }else{
        const msg=result.msg
        dispatch(errorMsg(msg))
      }
    })
  }
}

export function login(username,password) {
  return dispatch=>{
    reqLogin(username,password).then(res=>{
      const result=res.data
      if(result.code===0){
        const user=result.data
        dispatch(authSuccess(user))
      }else{
        const msg=result.msg
        dispatch(errorMsg(msg))
      }
    })
  }
}
