//请求模块
import axios from 'axios'

export default function ajax(url, data = {}, type = "GET") {
  let promise = ''
  return new Promise(function (resolve, reject) {
    //执行异步ajax请求
    if (type === "GET") {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        //删除最后一个&
        dataStr = dataStr.slice(0, -1)
        url += ('?' + dataStr)
      }
      //发送get请求
      promise = axios.get(url)//返回的是一个promise对象，而不是promise里面的data，我们需要的是data
    } else {
      //发送post请求
      promise = axios.post(url, data)
    }
    
    
    promise.then(function (response) {
      //成功调用resolve()
      resolve(response.data)//向外返回的是response的data
    }).catch(function (error) {
      //失败调用reject()
      reject(error)
    })
    
    
  })
  
}
