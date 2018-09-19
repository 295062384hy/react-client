import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavBar,InputItem,TextareaItem,Button,List,WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {updateUser} from '../../redux/actions'
import {HeaderSelector} from '../../components/header-selector/header-selsctor'

class LanbanInfo extends Component{
  state={
    header:'',
    info:'',
    post:'',
    salary:'',
    conpany:''
  }
  handleChange=(name,value)=>{
    this.stateState({
      [name]:value
    })
  }
  setHeader=(header)=>{
    this.setState({
      header
    })
  }
  save=()=>{
    this.props.updateUser(this.state)
  }

  render(){
    const {header}=this.props.user
    if(header){return <Redirect to='/laoban'/>}
    return(
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
            <WingBlank>
              <List>
                <InputItem placeholder='招聘职位' onChange={val=>this.handleChange('post',val)}>招聘职位</InputItem>
                  <InputItem placeholder='公司名称' onChange={val=>this.handleChange('company',val)}>公司名称</InputItem>
                    <InputItem placeholder='职位薪资' onChange={val=>this.handleChange('salary',val)}>职位薪资</InputItem>
             <TextareaItem title='招聘职位' placeholder='招聘职位' rows={3} onChange={val=>this.handleChange('info',val)}/>
                <Button type='primary' onClick={this.save}>保存</Button>
              </List>
            </WingBlank>

      </div>
    )
  }
}
export default connect(
  state=>({user:state.user}),
  {updateUser}
)(LanbanInfo)