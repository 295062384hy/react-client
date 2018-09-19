
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
  if(type==='GET'){
    let queryString=''
    Object.keys(data).forEach(key=>{
      const value=data[key]
      queryString+=key+'='+value+'&'
    })
    if(queryString){
      queryString=queryString.substring(0,queryString.length-1)
      url+='?'+queryString
    }
    return axios.get(url)
  }else {
    axios.post(url,data)
  }
}