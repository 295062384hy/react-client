import {reqRegister,reqLogin} from  '../api'
import {AUTH_SUCCESS,ERROR_MSG} from  './action-types'

const authSuccess=(user)=>({type:AUTH_SUCCESS,data:user})
const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})

/*
注册的异步action
 */
export function register({username,password,type}) {
  return dispatch=>{
    reqRegister({username,password,type}).then(res=>{
      const result=res.data
      if(result.code==0){
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
      if(result.code==0){
        const user=result.data
        dispatch(authSuccess(user))
      }else{
        const msg=result.msg
        dispatch(errorMsg(msg))
      }
    })
  }
}
