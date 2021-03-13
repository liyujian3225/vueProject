import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入ant-design-vue
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';
Vue.use(Antd);
//引入公共的样式
import '@/assets/css/public.scss';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
