/*
* @Author: LYJ
* @Date:   2020年4月14日17:38:15
* @Last Modified by:   LYJ
* @Describe: 流文件下载封装
*/
import format from "@/otherPlugin/formatDate";
/*
* @params[contentType]   响应头headers中的content-type
* @params[dataStream]    请求会回来的流
* @params[fileName]      要修改的文件名
* */
export default {
  // 导出流文件
  exportStreamFile(contentType, dataStream, fileName) {
    let contentTypeObj = {};
    let downloadElement = document.createElement('a');
    contentTypeObj.type = contentType;
    let nowTime = new Date().getTime();
    nowTime = format.formatDate(nowTime, '--yyyy年MM月dd日');
    downloadElement.download = fileName + nowTime;
    let blob = new Blob([dataStream], contentTypeObj);
    let href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
  },

  // 将arraybuffer流对象转换成字符串，用于导出失败时信息提示
  ab2str(bufferObj, callback) {
    let blob = new Blob([bufferObj]);
    let reader = new FileReader();
    reader.readAsText(blob, 'utf-8');
    reader.onload = function () {
      if (callback) callback.call(null, JSON.parse(reader.result))
    }
  }
}


