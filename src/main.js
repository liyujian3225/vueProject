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

//接口对象挂在到vue上
import api from './requestApi/api';
Vue.prototype.$api = api;

/* 防抖函数 */
import debouncedFun from "@/otherPlugin/debounced";
Vue.prototype.$debouncedFun = debouncedFun;

//混入基金相关
Vue.mixin({
  data() {
    return {
      rangeType: [
        { name: '日涨幅', key: 'dayOfGrowth' },
        { name: '近一周涨跌幅', key: 'lastWeek' },
        { name: '近一月涨跌幅', key: 'lastMonth' },
        { name: '近一季涨跌幅', key: 'lastQuarter' },
        { name: '近半年涨跌幅', key: 'lastHalfYear' },
        { name: '近一年涨跌幅', key: 'lastYear' },
      ],
      infoType: [
        { name: '基金名称', key: 'fundName'},
        { name: '基金名称缩写', key: 'fundNameAbbr'},
        { name: '基金公司名称', key: 'fundCompanyName'},
        { name: '基金代码', key: 'fundCode'},
        { name: '机构代码', key: 'instId'},
        { name: '服务费率', key: 'serviceRate'},
        { name: '管理费率', key: 'trusteeRate'},
        { name: '买入费率', key: 'manageRate'},
      ],
      fundType: {
        'BLEND': '混合型',
        'STOCK': '股票型',
        'INDEX': '指数型',
        'BOND': '债券型',
        'CURRENCY':'货币型',
      },
      riskLevel: {
        'L': '低风险',
        'M': '中高风险',
        'H': '高风险',
      },

    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
