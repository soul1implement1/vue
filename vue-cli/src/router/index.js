import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Index from '../components/index'
import Login from '../components/login'
import ErrorPage from '../components/404'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 安装路由
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      name:'HelloWorld',
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      name: 'login',
      path: '/',
      component: Login,

    },
    {
      name: 'index',
      // /:user/:pass=======params不使用/:user
      path: '/index',
      component: Index,
    },
    // 404
    {
      path:'*',
      component:ErrorPage
    }

  ]
});

