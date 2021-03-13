import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

/**
 * @param  ele          要生成 pdf 的DOM元素（容器）
 * @param pdfName       PDF文件生成后的文件名字
 * @param callback
 * */

function downloadPDF(ele, pdfName, callback = null) {
  /*html2canvas(ele, {
    dpi: 300,
    // scale: 2, // 提升画面质量，但是会增加文件大小
    // allowTaint: true,  //允许 canvas 污染， allowTaint参数要去掉，否则是无法通过toDataURL导出canvas数据的
    useCORS: true  //允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。
  }).then((canvas) => {

    var contentWidth = canvas.width;
    var contentHeight = canvas.height;
    //一页pdf显示html页面生成的canvas高度;
    var pageHeight = contentWidth / 592.28 * 841.89;
    //未生成pdf的html页面高度
    var leftHeight = contentHeight;
    //页面偏移
    var position = 0;
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    var imgWidth = 595.28;
    var imgHeight = 595.28 / contentWidth * contentHeight;

    var pageData = canvas.toDataURL('image/jpeg', 1.0);


    var pdf = new JsPDF('', 'pt', 'a4');

    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      //在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      // pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);
    } else {    // 分页
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        //避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }

    //可动态生成
    pdf.save(pdfName);
    if (callback) {
      callback()
    }
  })*/
  /* =========================分页========================= */
  html2canvas(ele, {
    background: "#FFFFFF",//如果指定的div没有设置背景色会默认成黑色,这里是个坑
    dpi: 300,
    // allowTaint: true,
    useCORS: true,
    scale: 1.4, // 提升画面质量，但是会增加文件大小
  }).then(function (canvas) {
    //未生成pdf的html页面高度
    var leftHeight = canvas.height;

    var a4Width = 595.28
    var a4Height = 841.89
    //一页pdf显示html页面生成的canvas高度;
    var a4HeightRef = Math.floor(canvas.width / a4Width * a4Height);

    //pdf页面偏移
    var position = 0;

    var pageData = canvas.toDataURL('image/jpeg', 1.0);

    var pdf = new JsPDF('x', 'pt', 'a4');
    var index = 1,
      canvas1 = document.createElement('canvas'),
      height;
    pdf.setDisplayMode('fullwidth', 'continuous', 'FullScreen');
    function createImpl(canvas) {
      if (leftHeight > 0) {
        index++;

        var checkCount = 0;
        if (leftHeight > a4HeightRef) {
          var i = position + a4HeightRef;
          for (i = position + a4HeightRef; i >= position; i--) {
            var isWrite = true
            for (var j = 0; j < canvas.width; j++) {
              var c = canvas.getContext('2d').getImageData(j, i, 1, 1).data

              if (c[0] != 0xff || c[1] != 0xff || c[2] != 0xff) {
                isWrite = false
                break
              }
            }
            if (isWrite) {
              checkCount++
              if (checkCount >= 10) {
                break
              }
            } else {
              checkCount = 0
            }
          }
          height = Math.round(i - position) || Math.min(leftHeight, a4HeightRef);
          if(height<=0){
            height = a4HeightRef;
          }
        } else {
          height = leftHeight;
        }

        canvas1.width = canvas.width;
        canvas1.height = height;

        var ctx = canvas1.getContext('2d');
        ctx.drawImage(canvas, 0, position, canvas.width, height, 0, 0, canvas.width, height);

        var pageHeight = Math.round(a4Width / canvas.width * height);
        // pdf.setPageSize(null, pageHeight)
        if(position != 0){
          pdf.addPage();
        }
        if (index > 2) {
          pdf.addImage(canvas1.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 20, a4Width, a4Width / canvas1.width * height);
        } else {
          pdf.addImage(canvas1.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, a4Width, a4Width / canvas1.width * height);
        }
        leftHeight -= height;
        position += height;
        if (leftHeight > 0) {
          setTimeout(createImpl, 300, canvas);
        } else {
          pdf.save(pdfName + '.pdf');
          if (callback) {
            callback()
          }
        }
      }
    }

    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < a4HeightRef) {
      pdf.addImage(pageData, 'JPEG', 0, 0, a4Width, a4Width / canvas.width * leftHeight);
      pdf.save(pdfName + '.pdf')
      if (callback) {
        callback()
      }
    } else {
      try {
        pdf.deletePage(0);
        setTimeout(createImpl, 300, canvas);
      } catch (err) {
        console.log(err);
      }
    }
  })

  /* =========================不分页========================= */
  /*html2canvas(ele, {
    dpi: 300,
    // allowTaint: true,
    useCORS: true,
    scale: 2 // 提升画面质量，但是会增加文件大小
  }).then(function (canvas) {
    /!**jspdf将html转为pdf一页显示不截断，整体思路：
     * 1. 获取DOM
     * 2. 将DOM转换为canvas
     * 3. 获取canvas的宽度、高度（稍微大一点）
     * 4. 将pdf的宽高设置为canvas的宽高
     * 5. 将canvas转为图片
     * 6. 实例化jspdf，将内容图片放在pdf中（因为内容宽高和pdf宽高一样，就只需要一页，也防止内容截断问题）
     *!/

    // 得到canvas画布的单位是px 像素单位
    var contentWidth = canvas.width
    var contentHeight = canvas.height

    // 将canvas转为base64图片
    var pageData = canvas.toDataURL('image/jpeg', 1.0)

    // 设置pdf的尺寸，pdf要使用pt单位 已知 1pt/1px = 0.75   pt = (px/scale)* 0.75
    // 2为上面的scale 缩放了2倍
    var pdfX = (contentWidth + 10) / 2 * 0.75
    var pdfY = (contentHeight + 500) / 2 * 0.75 // 500为底部留白

    // 设置内容图片的尺寸，img是pt单位
    var imgX = pdfX;
    var imgY = (contentHeight / 2 * 0.75); //内容图片这里不需要留白的距离

    // 初始化jspdf 第一个参数方向：默认''时为纵向，第二个参数设置pdf内容图片使用的长度单位为pt，第三个参数为PDF的大小，单位是pt
    var PDF = new JsPDF('', 'pt', [pdfX, pdfY])

    // 将内容图片添加到pdf中，因为内容宽高和pdf宽高一样，就只需要一页，位置就是 0,0
    PDF.addImage(pageData, 'jpeg', 0, 0, imgX, imgY)
    PDF.save(pdfName)
    if (callback) {
      callback()
    }
  })*/
}


export default {
  downloadPDF
}
