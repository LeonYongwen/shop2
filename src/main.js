//入口文件
import Vue from 'vue'
import App from './App'
import router from './router/index'



new Vue({
  el: '#app',
  render: h => h(App),
  router//产生了几个组件标签$router 路由器(push() replace()) $route(params,query,path)
})
