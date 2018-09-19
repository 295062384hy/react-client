
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

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
      return{...user,redirectTo:'/'}
    case ERROR_MSG:
      const msg=action.data
      return{...state,msg}
    default:
      return state
  }
}
export default combineReducers({
  user
})