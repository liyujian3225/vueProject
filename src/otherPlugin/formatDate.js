/*
* @Author: LYJ
* @Date:   2019-10-14
* @Last Modified by:   LYJ
* @Describe: 时间搓格式化函数
*/

/*export function formatDate(date, fmt) {
  var date = new Date(date);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};*/

export default {
  /*
  * 日期格式化【用法】
  * import format from "@/otherPlugin/formatDate";
  * let str = format.formatDate(时间搓, 'yyyy-MM-dd hh:mm:ss');
  * */
  formatDate(dateArg, fmt) {
    var date = new Date(dateArg);
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  },
  /*
  * 转换星期【用法】
  * import format from "@/otherPlugin/formatDate";
  * let str = format.forMatWeek(时间搓);
  * */
  forMatWeek(date) {
    let weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    let weekDay = new Date(date).getDay();
    return weekArr[weekDay];
  },
  timeToFormat: function (times) {   //时间段格式化
    var result = '00:00:00';
    var hour, minute, second
    if (times > 0) {
      hour = Math.floor(times / 3600);
      if (hour < 10) {
        hour = "0" + hour;
      }
      minute = Math.floor((times - 3600 * hour) / 60);
      if (minute < 10) {
        minute = "0" + minute;
      }

      second = Math.floor((times - 3600 * hour - 60 * minute) % 60);
      if (second < 10) {
        second = "0" + second;
      }
      result = hour + ':' + minute + ':' + second;
    }
    return result;
  },
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
