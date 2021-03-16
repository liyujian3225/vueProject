/**
 * @Author: icanf
 * @Date: 2021-03-16
 * @Project: vueProject
 */

export default {
  data() {
    return {
      /* =====================基金字段===================== */
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
  },
  methods: {

  }
}