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
      <a-spin :spinning="spinning">
        <div v-if="fundFullInfo" class="fundInfo">
          <fund-views :fundInfo="fundFullInfo"></fund-views>
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
    funcMenu: () => import(/* webpackChunkName: "funcMenu" */ '@/components/funcMenu'),
    fundViews: () => import(/* webpackChunkName: "investStrategy" */ './components/fundViews'),
    fundStrategy: () => import(/* webpackChunkName: "investStrategy" */ './components/fundStrategy'),
    fundManagers: () => import(/* webpackChunkName: "investStrategy" */ './components/fundManagers'),
    noData: () => import(/* webpackChunkName: "investStrategy" */ '@/components/noData'),
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
    this.getFundDetail()
  },
  watch: {
    sendData: {
      deep: true,
      handler: function(newVal) {
        console.log(newVal.fundCode)
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
