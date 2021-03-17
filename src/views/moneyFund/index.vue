<template>
  <div class="moneyFund">
    <div class="filterBox" ref="filterBox">
      <func-menu
        :showAddBtn="false"
        :delBtn="false"
        ref="funcMenu"
      >
        <template #filterForm>
          <a-form-model layout="inline">
            <a-form-model-item label="基金代码">
              <a-input
                placeholder="基金代码"
                class="customMarginStyle customFixedWidth"
                v-model="sendData.fundCode"
                allowClear
              />
            </a-form-model-item>
          </a-form-model>
        </template>
      </func-menu>
    </div>
    <div>

      <line-chart></line-chart>

      <a-spin :spinning="spinning">
        <div v-if="fundFullInfo" class="fundInfo">
          <fund-info :fundInfo="fundFullInfo"></fund-info>
          <fund-charts :fundInfo="fundFullInfo"></fund-charts>
          <fund-strategy :fundInfo="fundFullInfo"></fund-strategy>
          <fund-managers :fundManagers="fundManagers"></fund-managers>
        </div>
        <noData v-else></noData>
      </a-spin>
    </div>
  </div>
</template>
<script>
export default {
  name: "moneyFund",
  data() {
    return {
      sendData: {
        fundCode: '006113',
      },
      spinning: false,
      fundFullInfo: "",
      fundGrades: "",
      fundManagers: "",
    }
  },
  props: {},
  computed: {},
  components: {
    fundInfo: () => import(/* webpackChunkName: "investStrategy" */ './components/fundInfo'),
    fundCharts: () => import(/* webpackChunkName: "fundCharts" */ './components/fundCharts'),
    fundStrategy: () => import(/* webpackChunkName: "investStrategy" */ './components/fundStrategy'),
    fundManagers: () => import(/* webpackChunkName: "fundManagers" */ './components/fundManagers'),
    funcMenu: () => import(/* webpackChunkName: "funcMenu" */ '@/components/funcMenu'),
    noData: () => import(/* webpackChunkName: "noData" */ '@/components/noData'),

    lineChart: () => import(/* webpackChunkName: "lineChart" */ '@/components/charts/lineChart'),
  },
  mounted() {
  },
  methods: {
    getFundDetail() {
      this.spinning = true;
      this.$api.fundApi.getFundDetail({fundcode: this.sendData.fundCode}).then(response => {
        const { fundFullInfo, fundGrades, fundManagers } = response.data;
        this.fundFullInfo = fundFullInfo;
        this.fundGrades = fundGrades;
        this.fundManagers = fundManagers;
        this.spinning = false;
      })
    }
  },
  created() {
    // this.getFundDetail()
  },
  watch: {
    sendData: {
      deep: true,
      handler: function() {
        this.$debouncedFun(this, this.getFundDetail);
      },
    },
  },
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
<style scoped lang="scss">
  div.fundInfo {
  }
</style>
