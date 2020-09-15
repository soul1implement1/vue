// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  axios from 'axios'
import  vueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(vueAxios,axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;
//定义$axios（可以不写，在组件中直接使用axios）
Vue.prototype.$axios= axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App ,axios},
  template: '<App/>'
});

// Vue.use(Element, { size: 'small', zIndex: 3000 });
