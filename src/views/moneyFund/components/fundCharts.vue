<template>
  <div class="fundCharts">
    <a-card>
      <a-row :gutter="16">
        <a-col :span="3">
          <a-statistic :title="netValueData" :value="fundInfo['netValue']" style="margin-right: 50px" />
        </a-col>
        <template v-for="item in rangeType">
          <a-col :span="3" :key="item.key">
            <a-statistic
              :title="item.name"
              :precision="2"
              suffix="%"
              :value="fundInfo[item.key] * 100"
              :value-style="{ color: fundInfo[item.key] < 0 ? '#3f8600' : '#cf1322' }"
            >
              <template #prefix>
                <a-icon :type="fundInfo[item.key] < 0 ? 'arrow-down' : 'arrow-up'" />
              </template>
            </a-statistic>
          </a-col>
        </template>
      </a-row>
      <line-chart></line-chart>
    </a-card>
  </div>
</template>
<script>
import mixins from "@/views/mixins";
import { pickTransform, mapTransform, reNameTransform } from "@/otherPlugin/dataSet";
export default {
  mixins: [mixins],
  name: "fundCharts",
  data() {
    return {}
  },
  props: {
    fundInfo: {
      type: Object,
      require: true,
    },
  },
  computed: {
    netValueData: function() {
      return '最新净值（' + this.fundInfo.netValueDate.substr(5, 5) + '）';
    }
  },
  components: {
    lineChart: () => import(/* webpackChunkName: "lineChart" */ '@/components/charts/lineChart'),
  },
  mounted() {
    this.getFundYield()
  },
  methods: {
    //基金走势数据获取
    getFundYield() {
      this.$api.fundApi.getFundYield({ fundcode: this.fundInfo.fundCode}).then(response => {
        const { fundAndIndexYieldVoPair } = response.data;


      })
    }
  },
  created() {

  },
  watch: {},
  activated() {
  },
  deactivated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
}
</script>
<style scoped>

</style>
