<template>
  <div class="header">
    <div class="logoBox">
      <div class="img">
        <img src="../assets/img/logo.png" alt="logo" >
      </div>
      <h2>理财好助手</h2>
    </div>
    <div class="loginInfo">
      <span>StephenLee</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "header",
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
  div.header {
    width: 100%;
    height: 63px;
    background: #082a5b;
    padding: 0 22px;
    box-sizing: border-box;
    position: fixed;
    z-index: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.logoBox {
      display: flex;
      align-items: center;

      div.img {
        width: 31px;
        height: 31px;
        margin-right: 12px;

        img {
          width: 100%;
        }
      }

      h2 {
        font-size: 20px;
        color: #fff;
        font-weight: normal;
      }
    }
    div.loginInfo {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #fff;
    }
  }
</style>
