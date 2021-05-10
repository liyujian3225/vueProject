<template>
  <div class="notauthority">
    <div class="img">
      <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
        <template #extra>
          <a-button type="primary">
            Back Home
          </a-button>
        </template>
      </a-result>
    </div>
    <p>您暂时没有权限访问该页面...</p>
    <a href="#" onClick="javascript :history.back(-1);">返回上一页面</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.notauthority {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .img {
    margin: 182px auto ;
    width: 671px;
    height: 442px;
    img {
      width: 671px;
      height: 442px;
    }
  }
  p {
    margin-top: -122px;
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
