import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect}  from 'react-redux'
import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'
const ListItem=List.Item

 class Register extends Component{
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
  registera=()=>{
    this.props.register(this.state)
  }
  goLogin=()=>{
  this.props.history.replace('/login')
}
  render(){
    const {type} = this.state
    const {msg,redirectTo} = this.props.user
    if(redirectTo){
      return <Redirect to={redirectTo}></Redirect>
    }
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg?<p className='error-msg'>{msg}</p>:null}
            <InputItem placeholder='请输入用户名' onChange={val=>this.handleChange('username',val)}>用户名</InputItem>
            <WhiteSpace/>
            <InputItem typr='password' placeholder='请输入密码'onChange={val=>this.handleChange('password',val)}>密码</InputItem>
            <WhiteSpace/>
            <InputItem typr='password' placeholder='请输入确认密码'onChange={val=>this.handleChange('password2',val)}>确认密码</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型</span> &nbsp;&nbsp;&nbsp;
             <Radio  checked={type==='laoban'} onChange={()=>this.handleChange('type','lanban')}>老板</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={()=>this.handleChange('type','lanban')}>大神</Radio>&nbsp;&nbsp;&nbsp;
            </ListItem>
            <Button type='primary' onClick={this.registera}>注&nbsp;&nbsp;册</Button>
            <Button  onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
  state=>({user:state.user}),
  {register}
)(Register)