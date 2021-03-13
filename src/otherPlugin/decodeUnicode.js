/*
* @Author: LYJ
* @Date: 2020年2月28日15:35:02
* @Last Modified by: LYJ
* @Describe: unicode解码
*/
export default function decodeUnicode(str) {
  str = str.replace(/\\/g, "%");
  return unescape(str);
}
