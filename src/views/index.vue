<template>
  <div class="index">
    <Header/>

    <div class="leftNav">
      <menuCom/>
    </div>

    <div class="rightCon">
      <div class="routerBox">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {

    }
  },
  props: {},
  computed: {},
  components: {
    Header: () => import(/* webpackChunkName: "headers" */ '@/components/header'),
    menuCom: () => import(/* webpackChunkName: "menuCom" */ '@/components/menuCom')
  },
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
<style scoped>
  div.index {
    height: 100%;
    display: flex;
  }
</style>
