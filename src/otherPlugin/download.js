/*
* @Author: LYJ
* @Date:   2019-10-14
* @Last Modified by:   LYJ
* @Describe: 文件下载封装
*/

import JSZip from 'jszip';
import saveAs from 'save-as';
export default {
  //参数一： 图片地址
  //参数二： 图片名称，可选
  downloadIamge(imgsrc, name) {
    var image = new Image();
    // 解决跨域 Canvas 污染问题
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);
      if(isIE()){
        saveFileForIE(canvas, name);
      }{
        var url = canvas.toDataURL('image/*');
        // 生成一个a元素
        var a = document.createElement('a');
        // 创建一个单击事件
        var event = new MouseEvent('click');
        a.download = name || new Date().getTime();
        // 将生成的URL设置为a.href属性
        a.href = url;
        // 触发a的单击事件
        a.dispatchEvent(event)
      }
    };
    image.src = imgsrc;
  },

  //zip压缩下载
  // arr(数组)参数为图片下载的地址  ['http://www.baidu.com/1.jpeg','http://www.baidu.com/2.jpeg']
  downloadIamgeZip(arr){
    let zip = new JSZip();
    let imgs = zip.folder('images');
    let baseList = [];
    let _this = this;
    for (let i = 0; i < arr.length; i++) {
      let image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute('crossOrigin', 'anonymous');
      image.onload = function () {
        let canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL(); // 得到图片的base64编码数据 let url =
        canvas.toDataURL('image/*');
        baseList.push(url.substring(22));
        if (baseList.length === arr.length) {
          if (baseList.length > 0) {
            for (let k = 0; k < baseList.length; k++) {
              // 保持文件名不变
              let nameStr = arr[k].slice(arr[k].lastIndexOf('/')+1);
              let nameArr = nameStr.split('.');
              imgs.file(nameArr[0] + '.' + nameArr[1], baseList[k], {base64: true})
            }
            zip.generateAsync({type: 'blob'}).then(function (content) {
              // saveAs方法以来save-as包
              // content 压缩文件
              saveAs(content, 'images.zip')
            })
          } else {
            console.log('下载错误');
          }
        }
      };
      image.src = arr[i]
    }
  }

}
function isIE() { //ie?
  if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
  else
    return false;
}
function saveFileForIE(canvas, fileName) {
  try {
    var blob = canvas.msToBlob();
    navigator.msSaveBlob(blob, fileName);
  }catch (e) {
    owlzerOBj.UTILE.alertP('Please upgrade your browser');
  }
}