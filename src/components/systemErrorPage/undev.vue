<template>
  <div class="servererr">
    <div class="img">
      <img src="@/assets/img/systemErrorPage/undev.png" alt/>
    </div>
    <p>此功能正在紧张开发中…敬请期待</p>
    <p class="p1">如果您有任何疑问，请随时与我们联系</p>
    <p class="p1">联系电话：400-8638-211</p>
    <a href="#" @click="$router.push({path: '/'})">返回首页</a>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .servererr {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;

    .img {
      margin: 192px auto;

      width: 571px;
      height: 404px;

      img {
        width: 571px;
        height: 404px;
      }
    }

    p {
      margin-top: -120px;
      font-size: 30px;
      font-family: Source Han Sans CN Regular, Source Han Sans CN Regular-Regular;
      font-weight: 400;
      text-align: center;
      color: #2c3839;
      line-height: 72px;
    }

    .p1 {
      width: 408px;
      margin: 0 auto;
      font-size: 16px;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: 400;
      text-align: center;
      color: #7d8283;
      line-height: 30px;
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
