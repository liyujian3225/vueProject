<template>
  <div class="menuCom">
    <div class="menuNav">
      <a-menu
        mode="inline"
        theme="dark"
        v-model="current"
      >
        <template v-for="item in menuList">
          <a-menu-item
            v-if="!item.childMenuList.length"
            :key="item.key"
          >
            <router-link :to="item.routeKey">
              <a-icon
                type="appstore"
                class="menuIcon"
              />
              <span class="menuName">{{ item.groupName }}</span>
            </router-link>
          </a-menu-item>
        </template>
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
    return{
      current: ['moneyFund'],
      menuList: [
        { childMenuList: [], groupName: "货币型基金", routeKey: "/fund/moneyFund", key: 'moneyFund' },
        { childMenuList: [], groupName: "债券型基金", routeKey: "/fund/bondFund", key: 'bondFund' },
        { childMenuList: [], groupName: "股票型基金", routeKey: "/fund/equityFund", key: 'equityFund' },
        { childMenuList: [], groupName: "混合型基金", routeKey: "/fund/hybridFund", key: 'hybridFund' },
      ]
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
