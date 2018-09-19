import React,{Component} from 'react'
import Logo from '../../components/logo/logo'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'
const ListItem=List.Item
export default class Login extends Component{
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
  render(){
    const {type} = this.state
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem placeholder='请输入用户名' onChange={val=>this.handleChange('username',val)}>用户名</InputItem>
            <WhiteSpace/>
            <InputItem typr='password' placeholder='请输入密码'onChange={val=>this.handleChange('password',val)}>密码</InputItem>
            <WhiteSpace/>
            <WhiteSpace/>
            <Button type='primary'>登&nbsp;&nbsp;录</Button>
            <Button  onClick={this.gorigister}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}