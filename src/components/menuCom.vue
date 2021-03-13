<template>
  <div class="menuCom">
    <div class="menuNav">
      <a-menu
        mode="inline"
        theme="dark"
      >
        <a-menu-item key="moneyFund">
          <router-link to="/moneyFund">
            <a-icon type="fund" />
            货币型基金
          </router-link>
        </a-menu-item>
        <a-menu-item key="bondFund">
          <router-link to="/bondFund">
            <a-icon type="appstore" />
            债券型基金
          </router-link>
        </a-menu-item>
        <a-menu-item key="equityFund">
          <router-link to="/equityFund">
            <a-icon type="sliders" />
            股票型基金
          </router-link>
        </a-menu-item>
        <a-menu-item key="hybridFund">
          <router-link to="/hybridFund">
            <a-icon type="box-plot" />
            混合型基金
          </router-link>
        </a-menu-item>
        <a-menu-item key="alipay">
          <a href="https://cn.investing.com/rates-bonds/u.s.-10-year-bond-yield" target="_blank" rel="noopener noreferrer">
            美国十年期国债收益率
          </a>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "menuCom",
  data() {
    return {

    }
  },
  props: {},
  computed: {},
  components: {},
  mounted() {
  },
  methods: {},
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
<style scoped lang="scss">
  div.menuCom {
    width: 256px;
    height: 100%;
    position: fixed;
    background: #011a3e;
    box-sizing: border-box;
    padding-top: 64px;
    div.menuNav {
      width: 100%;
      height: 100%;
      .menuIcon, .menuName {
        font-size: 16px;
      }
    }
  }
</style>
