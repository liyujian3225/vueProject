/*
* @Author: LYJ
* @Date:   2021-03-13
* @Last Modified by:   LYJ
* @Describe: 生产环境/开发环境域名管理文件
*/

const domain = {
  api: '',
  imgapi: '',
};
if (process.env.NODE_ENV === 'development'){
  domain.api = process.env.VUE_APP_APIHOST;
}else if (process.env.NODE_ENV === 'production'){
  domain.api = window.api.baseURL;
}
export default domain