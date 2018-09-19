
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RESET_USER,RECEIVE_USER} from './action-types'
import {getRedirectPath} from  '../untils'
const initUser={
  username:'',
  type:'',
  mas:'',
  redirectTo:'',
}
function user(state=initUser,action) {
  switch (action.type){
    case AUTH_SUCCESS:
      const user=action.data
      return{...user,redirectTo:getRedirectPath(user.type,user.header)}
    case ERROR_MSG:
      const msg=action.data
      return{...state,msg}
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return{...initUser,msg:action.data}
    default:
      return state
  }
}
export default combineReducers({
  user
})