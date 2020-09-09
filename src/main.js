// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import moment from 'moment';
import store from './store/store'
import * as filters from './filters';
import permission  from "./directive/permission/permission";

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
Vue.prototype.$moment=moment;//赋值使用，使用方法为:this.moment
Vue.directive("permission",permission);

Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})
Vue.directive('fast-click', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      el.setAttribute('disabled', 'disabled');
      el.disabled = true;
      // let t = setTimeout(() => {
      //   clearTimeout(t);
      //   t = null;
      //   el.disabled = false;
      //   el.removeAttribute('disabled');
      // }, 1500); // 时间可以根据实际情况定
    })
  }
});
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
