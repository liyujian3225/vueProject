<template>
  <div class="servererr">
    <div class="img">
      <a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
        <template #extra>
          <a-button type="primary">
            Back Home
          </a-button>
        </template>
      </a-result>
    </div>
    <p>哎呀，服务器出了点小问题...</p>
    <a href="#" @click="$router.go(-1)">返回上一页面</a>
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
      margin: 182px auto;
      width: 590px;
      height: 368px;

      img {
        width: 590px;
        height: 368px;
      }
    }

    p {
      margin-top: -100px;
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
