import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Cookies from 'js-cookies'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'

import LaobanInfo from '../laoban-info/laoban-info'
import DanshenInfo from '../dashen-info/dashen-info'
import Laoban from '../laoban/laoban'
import Dashen from '../dashen/dashen'
import Message from '../message/message'
import Personal from '../personal/personal'
import NavFooter from '../../components/nav-footer/nav-footer'
 class Main extends Component{
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]

  render(){
   const userid=Cookies.get('userid')
    if(!userid){
     // this.props.history.replace('/login')
     //  return null
     return <Redirect to='/login'/>
    }

    const navList=this.navList
    const path=this.props.location.pathname
    const currentNav=navList.find(nav=>path===nav.path)
    const {type}=this.props.user
    if(type==='lanban'){
      navList[1].hide=true
    }else {
      navList[0].hide=true
    }

    return(
      <div>
        {currentNav?<NavBar>{currentNav.title}</NavBar>:null}
     <Switch>
       <Route path='/lanbaninfo' component={LaobanInfo}/>
       <Route path='/dasheninfo' component={DanshenInfo}/>

       <Route path='/laoban' component={Laoban}/>
       <Route path='/dashen' component={Dashen}/>
       <Route path='/message' component={Message}/>
       <Route path='/personal' component={Personal}/>
     </Switch>
        {currentNav ? <NavFooter navList={this.navList}/> : null}
      </div>
    )
  }
}
export default connect(
  start=>({}),
  {}
)(Main)