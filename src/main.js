// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

Vue.directive('fast-click', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      el.setAttribute('disabled', 'disabled');
      el.disabled = true;
      let t = setTimeout(() => {
        clearTimeout(t);
        t = null;
        el.disabled = false;
        el.removeAttribute('disabled');
      }, 1500); // 时间可以根据实际情况定
    })
  }
});
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
