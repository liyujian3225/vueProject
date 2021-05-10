<template>
  <div class="notfound">
    <div class="img">
      <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
          <a-button type="primary">
            Back Home
          </a-button>
        </template>
      </a-result>
    </div>
    <p>哎呀，页面被飞船带走了...&nbsp;&nbsp;&nbsp;&nbsp;{{time}}秒后自动返回</p>
    <a href="#" @click="back">返回上一页面</a>
  </div>
</template>

<script>
  export default {
    name: "notFound",
    data() {
      return {
        time: 5,
        fromName: ''
      }
    },
    methods:{
      back(){
        this.$router.replace({name: this.fromName});
      }
    },
    created() {
      let t;
      t = setInterval(() => {
        this.time--;
        if (this.time <= 0){
          clearInterval(t);
          this.$router.replace({name: this.fromName});
        }
      }, 1000);
    },
    beforeRouteEnter(to, from, next){
      next(vm=>{
        vm.fromName = from.name;
      });
    }
  }
</script>

<style lang="scss">
  .notfound {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;

    .img {
      margin: 185px auto;

      width: 397px;
      height: 459px;

      img {
        width: 397px;
        height: 459px;
      }
    }

    p {
      margin-top: -138px;
      font-size: 30px;
      font-family: Source Han Sans CN Regular, Source Han Sans CN Regular-Regular;
      font-weight: 400;
      text-align: center;
      color: #2c3839;
      line-height: 72px;
    }

    a {
      font-size: 16px;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: 400;
      text-decoration: underline;
      text-align: center;
      color: #00bf89;
      line-height: 30px;
    }
  }
</style>
