/*
* @Author: LYJ
* @Date: 2020-09-25 11:06:07
* @Last Modified by: LYJ
* @Describe: 加载额外的js文件（尽量不用）
*/
export default function (url, callback) {
  let script = document.createElement('script');
  script.type = "text/javascript";
  if (typeof (callback) != "undefined") {
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      }
    } else {
      script.onload = function () {
        callback();
      }
    }
  }
  script.src = url;
  document.body.appendChild(script);
}
