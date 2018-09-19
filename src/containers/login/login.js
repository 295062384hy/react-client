import React,{Component} from 'react'
import {login}  from '../../redux/actions'
import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import Logo from '../../components/logo/logo'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Button} from 'antd-mobile'

 class Login extends Component{
  state={
    username:'',
    password:'',
    password2:'',
    type:'dashen'
  }
  handleChange= (name,value)=>{
    this.setState({
      [name]:value
    })
  }
  gorigister=()=>{
    this.props.history.replace('/register')
  }
  login=()=>{
    this.props.login(this.state)
  }
  render(){
    const{msg,redirectTo}=this.props
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          {msg ? <p className='error-msg'>{msg}</p> : null}
          <List>
            <InputItem placeholder='请输入用户名' onChange={val=>this.handleChange('username',val)}>用户名</InputItem>
            <InputItem typr='password' placeholder='请输入密码'onChange={val=>this.handleChange('password',val)}>密码</InputItem>
            <WhiteSpace/>
            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;录</Button>
            <Button  onClick={this.gorigister}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
    state=>({user:state.user}),
   {login}
  )(Login)