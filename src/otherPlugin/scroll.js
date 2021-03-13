/*
* @Author: LYJ
* @Date: 2019年12月5日17:49:54
* @Last Modified by: LYJ
* @Describe: 内容区域滚动
*/

import BScroll from 'better-scroll';

export default {
  scroll: (refName) => {
    new BScroll(refName,{
      bounce: true,       // 当滚动超过边缘的时候会有一小段回弹动画
      mouseWheel: true,   // 开启鼠标滚轮
      stopPropagation: true,   // 阻止事件流
      scrollbar: {        // 开启滚动条
        fade: false,
        interactive: false
      }
    });
  }
}
