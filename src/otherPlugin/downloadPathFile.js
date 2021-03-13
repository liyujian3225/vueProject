/*
* @Author: LYJ
* @Date:   2020年4月14日17:38:15
* @Last Modified by:   LYJ
* @Describe: 后台回传文件下载地址，下载文件
*/

/*
* @params[url]   文件下载地址
* */
export default function downloadFile(url){
  let alink = document.createElement("a");
  alink.href = url+'?download=download';
  alink.download = 'download';
  let evt = document.createEvent("MouseEvents");
  evt.initEvent("click", true, true);
  alink.dispatchEvent(evt);
}

