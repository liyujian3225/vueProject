### 移动端布局方式

- `百分比布局` 高度百分比布局没有参考物、背景图、字体大小难以把控。
- `flex弹性盒子布局`
- `rem布局`
    - 定义：rem是相对于根元素html的字体大小的单位，它就是一个相对单位。
    - 关键：在不同设备上设置html的font-size
    - ```javascript
      //方法1
      //javascript来获取设备宽度
      //纵向分类16份，根字体为设备宽度的1/16
      window.onload = function(){
        (function() {
          var docElem = document.documentElement;
          docElem.style.fontSize = docElem.getBoundingClientRect().width / 16 + "px";
        })()
      };
      //同时设置
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">
      ```
    - ```javascript
      //方法2，来源淘宝
      //可以meta都不用写 js会判断如果没有则创建一个。
      (function (win) {
         var ratio, scaleValue, renderTime,
            document = window.document,
            docElem = document.documentElement,
            vpm = document.querySelector('meta[name="viewport"]');

         if (vpm) {
            var tempArray = vpm.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
            if (tempArray) {
               scaleValue = parseFloat(tempArray[2]);
               ratio = parseInt(1 / scaleValue);
            }
         } else {
            vpm = document.createElement("meta");
            vpm.setAttribute("name", "viewport");
            vpm.setAttribute("content", "width=device-width, initial-scale=1, user-scalable=no, minimal-ui");
            docElem.firstElementChild.appendChild(vpm);
         }

         win.addEventListener("resize", function () {
             clearTimeout(renderTime);
             renderTime = setTimeout(initPage, 300);
         }, false);

         win.addEventListener("pageshow", function (e) {
            e.persisted && (clearTimeout(renderTime), renderTime = setTimeout(initPage, 300));
         }, false);

         "complete" === document.readyState ? document.body.style.fontSize = 12 * ratio + "px" : document.addEventListener("DOMContentLoaded", function () {
            document.body.style.fontSize = 12 * ratio + "px";
         }, false);

         initPage();

         function initPage() {
            var htmlWidth = docElem.getBoundingClientRect().width;
            htmlWidth / ratio > 540 && (htmlWidth = 540 * ratio);
            win.rem = htmlWidth / 16;
            docElem.style.fontSize = win.rem + "px";
         }
      })(window);
      ```
    - ```css
        /*方法3*/
        /*比较麻烦就是得知道设备的宽度，手机的分辨率很多所以麻烦了点。不过性能方面肯定最高。*/
        @media screen and (min-width: 320px) {
            html {
                font-size: 50px;
            }
        }

        @media screen and (min-width: 360px) {
            html {
                font-size: 56px;
            }
        }

        @media screen and (min-width: 414px) {
            html {
                font-size: 63px;
            }
        }
        ``` 
    - ```html
        <!--自己之前总结的-->
        <!doctype html>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            <meta name="x5-orientation" content="portrait | landscape" />
            <meta name="screen-orientation" content="portrait">
            <meta name="x5-fullscreen" content="true" />
            <meta name="full-screen" content="yes">
            <meta name="format-detection" content="telephone=no, email=no" />
            <title>Document</title>
            <!--
              width:可视区域的宽度，值可为数字或关键词device-width
              height:同width
              intial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放
              maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别，
              maximum-scale用户可将页面放大的程序，1.0将禁止用户放大到实际尺寸之上。
              user-scalable:是否可对页面进行缩放，no 禁止缩放
              忽略将页面上的数字识别为电话号码
              忽略Android 平台中对邮箱地址的识别
            -->
        </head>
        <style>
          a,button,input{
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-appearance: none;
          }
          body{
            -webkit-user-select:none;
            -webkit-text-size-adjust:100%;
            -webkit-overflow-scrolling:touch;
          }
          *{
            font-family: "helvetica";
            max-height:9999999px;
          }
        </style>
        <body>
        </body>
        </html>
        <script>
          window.onload = function() {
            (function (doc, win) {
                var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function () {
                        var clientWidth = docEl.clientWidth;
                        if (!clientWidth) return;
                        if(clientWidth>=750){
                          // 这里的640 取决于设计稿的宽度
                            docEl.style.fontSize = '100px';
                        }else{
                            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                        }
                    };
                if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
          })(document, window);
          }
        </script>
        ```  
    - 扩展：em指相对于父元素字体大小的单位。


### 视口概念

- `布局视口`默认尺寸是980px。
    ```javascript
    //获取方法
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientheight;
    //设置方法
    <meta name="viewport" content="width=400">
    ```

- `视觉视口`Client端、手机、平板：浏览器不支持宽高的改变，所以视觉视口就是屏幕大小。

- `理想视口`布局视口宽度 = 视觉视口宽度
    ```javascript
    //设置方法
    <meta name="viewport" content="width=device-width">
    ```
    |属性名|取值|描述|
    |:----|----|----|
    |width|正整数或device-width|定义视口的宽度，单位为像素|
    |height|正整数或device-height|定义视口的高度，单位为像素，一般不用|
    |initial-scale|[0.0-10.0]|定义初始缩放值|
    |minimum-scale|[0.0-10.0]|定义放大最大比例，它必须小于或等于maximum-scale设置|
    |maximum-scale|[0.0-10.0]|	定义缩小最小比例，它必须大于或等于minimum-scale设置|
    |user-scalable|	yes / no|定义是否允许用户手动缩放页面，默认值 yes|
    - viewport 标签只对移动端浏览器有效，对 PC 端浏览器是无效的
    - 当缩放比例为 100% 时，dip 宽度 = CSS 像素宽度 = 理想视口的宽度 = 布局视口的宽度
    - 单独设置 initial-scale 或 width 都会有兼容性问题，所以设置布局视口为理想视口的最佳方法是同时设置这两个属性
    - 即使设置了 user-scalable = no，在 Android Chrome 浏览器中也可以强制启用手动缩放

### 像素补存

- `像素是计算机屏幕中显示特定颜色的最小区域。屏幕的像素越多，同一范围内看到的内容就越多。或者说，当设备尺寸相同时，像素越密集，画面就越精细。`

    |像素的分类|定义||
    |:----|----|----|
    |物理像素(设备像素，device pixels)|设备屏幕的物理像素，任何设备的物理像素数量都是固定的|
    |逻辑像素(设备独立像素)|操作系统定义的一中像素单位||
    |CSS像素(CSS pixels)|它和物理像素之间的比例取决于屏幕特性、以及用户进行的缩放，由浏览器自行换算|
    ![RUNOOB 图标](https://user-gold-cdn.xitu.io/2018/10/5/166435cbbd90a175?imageslim "RUNOOB")

### 设备像素比
- devicePixelRatio = 设备像素/CSS像素
    ```javascript
    //获取方式
    window.devicePixelRatio
    ```
    ```css
    /*css中获取方式*/
    device-pixel-ratio
    ```
