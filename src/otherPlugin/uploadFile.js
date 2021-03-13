/*
* @Author: LYJ
* @Date: 2020年4月15日13:05:03
* @Last Modified by: LYJ
* @Describe: 上传文件回调封装
*/

export default {
  /*
  * 多文件上传
  * that    this指针
  * viewList    页面视图需要绑定的数组
  * uploadingList     upload组件文件发生变化时的参数
  * 返回上传后组合好的路径
  * */
  multipleFileUpload(that, viewList, uploadingList) {
    that[viewList] = uploadingList;
    let temp = [];
    uploadingList.forEach(val => {
      if (val.url) {
        temp.push(val.url);
      }
      if (val.response && val.response.extra) {
        temp.push(val.response.extra.url);
      }
      if (val.status === 'error') {
        that.$message.error('上传失败！');
      }
      if (val.status === 'done' && val.response && val.response.status !== '99') {
        that.$message.error(val.response.msg);
        let sub = that[viewList].findIndex(item => item.uid === val.uid);
        that[viewList].splice(sub, 1);
      }
    });
    return temp.join(';')
  },

  /*
  * 单文件上传
  * that    this指针
  * viewList    页面视图需要绑定的数组
  * uploadingList     upload组件文件发生变化时的参数
  * 返回上传后组合好的路径
  * */
  singleFileUpload(that, viewList, uploadingList) {
    let pathStr = '';
    that[viewList] = uploadingList;
    if (uploadingList.length) {
      if (uploadingList[0].response && uploadingList[0].response.extra) {
        pathStr = uploadingList[0].response.extra.url;
      }
      if (uploadingList[0].status === 'error') {
        that.$message.error('上传失败！');
      }
      if (uploadingList[0].status === 'done' && uploadingList[0].response && uploadingList[0].response.status !== '99') {
        that.$message.error(uploadingList[0].response.msg);
        let sub = that[viewList].findIndex(item => item.uid === uploadingList[0].uid);
        that[viewList].splice(sub, 1);
      }
    } else {
      pathStr = '';
    }
    return pathStr;
  }
}
