(function ($) {
  $.fn.onLine = function (options) {
    var box = this;
    var regainCanvas = options.regainCanvas;
    var vueThis = options.that || null;
    var setCanvas = options.setCanvas || null;
    var leftData = options.leftData || null;
    var rightData = options.rightData || null;
    var linewidth = 2, linestyle = "#108ee9";
    var part1, part2;
    if (box.find(".show").hasClass("topBottom") === true) {
      part1 = box.find(".showtop");
      part2 = box.find(".showbottom");
      part1.children("span").each(function (index, element) {
        $(this).attr({
          group: "gpl",
          left: $(this).position().left + $(this).outerWidth() / 2,
          top: $(this).position().top + $(this).outerHeight(),
          sel: "0",
          check: "0"
        });
      });
      part2.children("span").each(function (index, element) {
        $(this).attr({
          group: "gpr",
          left: $(this).position().left + $(this).outerWidth() / 2,
          top: $(this).position().top,
          sel: "0",
          check: "0"
        });
      });
    } else {
      part1 = box.find(".showleft");
      part2 = box.find(".showright");
      box.find(".showleft").children("span").each(function (index, element) {
        $(this).attr({
          group: "gpl",
          left: $(this).position().left + $(this).outerWidth(),
          top: $(this).position().top + $(this).outerHeight() / 2,
          sel: "0",
          check: "0"
        });
      });
      box.find(".showright").children("span").each(function (index, element) {
        $(this).attr({
          group: "gpr",
          left: $(this).position().left,
          top: $(this).position().top + $(this).outerHeight() / 2,
          sel: "0",
          check: "0"
        });
      });
    }
    part1.attr('first', 0);
    part2.attr('first', 0);
    var canvas = box.find(".canvas")[0];
    canvas.width = box.find(".show").width();
    canvas.height = box.find(".show").height();
    var backcanvas = box.find(".backcanvas")[0];
    backcanvas.width = box.find(".show").width();
    backcanvas.height = box.find(".show").height();
    var groupstate = false;
    var mx = [];
    var my = [];
    var ms = [];
    var pairl = [];
    var pairr = [];
    var pair = 0;
    var temp;
    var mxid = [];
    var myid = [];
    var objL, objR;
    var mid_startx, mid_starty, mid_endx, mid_endy;
    var pairSet, countL, countR, getPairL, getPairR, orderCheck;
    var orderCheck = new Array();
    var orderPair = new Array();
    var subSize = box.find(".showitem").size();
    if (!setCanvas) {
      var startDom;
      document.addEventListener('touchstart', startEvent, false);
      function startEvent(event) {
        var $target = $(event.target).parent();
        if (!$target.hasClass('showitem')) return

        // 记录手指首次按下的元素
        startDom = $target;
        // 如果当前元素已经连线过  则不进行任何操作
        if ($target.attr('check') == 1) return

        countL = 0;
        countR = 0;
        for(var i=0; i<subSize; i++ ){
          if( box.find(".showitem").eq(i).hasClass("addstyle") == true ){
            orderCheck[i] = true;
            orderPair[i] = box.find(".showitem").eq(i).attr("pair");
          }
          else {
            orderCheck[i] = false;
            orderPair[i] = null;
          }
        }

        pairSet =  parseInt($target.attr("pair")) * 2;
        groupstate=true;

        var testP;
        if($target.attr("check")==1){
          $target.attr("sel","1").parent().attr("first","1");
          temp=$target;
        }else{
          $target.attr("sel","1").addClass("addstyle").parent().attr("first","1");
          temp=$target;

        };
        mid_startx=$target.attr("left");
        mid_starty=$target.attr("top");
      }

      document.addEventListener('touchmove', moveEvent, false);
      function moveEvent(event) {
        var $target = $(event.target);
        var touch = event.touches[0];
        var element = document.elementFromPoint(event.touches[0].pageX, event.touches[0].pageY); // 当前经过的真实dom
        if(groupstate){
          mid_endx=touch.pageX-box.find(".show").offset().left;
          mid_endy=touch.pageY-box.find(".show").offset().top;
          var targettrue=null;
          if($(element).is("span") && $(element).closest(".show").parent().attr("class")==box.attr("class") ){
            targettrue=$(element);
          }else if($(element).closest(".showitem").is("span") && $(element).closest(".show").parent().attr("class")==box.attr("class")){
            targettrue=$(element).closest(".showitem");
          }else{
            targettrue=null;
          };
          if(targettrue){
            if(targettrue.parent().attr("first")==0){
              if(targettrue.attr("check")==0){
                targettrue.addClass("addstyle").attr("sel","1").siblings("span[check=0]").removeClass("addstyle").attr("sel","0");
              };
            }else{
              if(targettrue.attr("check")==0){
                targettrue.addClass("addstyle").attr("sel","1").siblings("span[check=0]").removeClass("addstyle").attr("sel","0");
                mid_startx=targettrue.attr("left");
                mid_starty=targettrue.attr("top");

              };

            };
          }else{
            if(part1.attr("first")==0){
              part1.children("span").each(function(index, element) {
                if($(this).attr('check')==0){
                  $(this).attr("sel","0").removeClass("addstyle");
                };
              });
            };
            if(part2.attr("first")==0){
              part2.children("span").each(function(index, element) {
                if($(this).attr('check')==0){
                  $(this).attr("sel","0").removeClass("addstyle");
                };
              });
            };

          };

          if (targettrue && targettrue.hasClass('addstyle')) {
            startDom = targettrue;
          }
          backstrockline();
        };
        // event.preventDefault();
      }

      document.addEventListener('touchend', endEvent, false);
      function endEvent(event) {
        var element = document.elementFromPoint(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        var $target = $(element);
        if(groupstate){
          var targettrue;
          if($target.is("span") && $target.closest(".show").parent().attr("class")==box.attr("class") ){
            targettrue=$target;
          }else if($target.closest(".showitem").is("span") && $target.closest(".show").parent().attr("class")==box.attr("class")){
            targettrue=$target.closest(".showitem");
          }else{
            targettrue=null;
          };
          if(targettrue){
            if(targettrue.parent().attr("first")==0){
              if(targettrue.attr("check")==0){
                if(temp.attr('check')==1){
                  part1.children("span").each(function(index, element) {
                    if($(this).attr('sel')==1){
                      objL = $(this);
                      objL.attr("check","1");
                      objL.attr("sel","0");
                      countL++;
                    }
                  });
                  part2.children("span").each(function(index, element) {
                    if($(this).attr('sel')==1){
                      objR = $(this);
                      objR.attr("check","1");
                      objR.attr("sel","0");
                      countR++;
                    }
                  });

                  if( countL == 1 && countR == 1){
                    mx.push(objL.attr('left'));
                    my.push(objL.attr('top'));
                    ms.push(0);
                    objL.attr("pair",pair);
                    pairl.push(pair);
                    mx.push(objR.attr('left'));
                    my.push(objR.attr('top'));
                    ms.push(1);
                    objR.attr("pair",pair);
                    pairr.push(pair);
                    pair+=1;
                    part1.attr('first',0);
                    part2.attr('first',0);
                    var reLine = pairSet/2;
                    part1.find("span[pair='" + reLine +"']").removeClass("addstyle").attr("check","0").removeAttr("pair");
                    part2.find("span[pair='" + reLine +"']").removeClass("addstyle").attr("check","0").removeAttr("pair");
                    strockline2(pairSet);
                  }
                  else {
                    box.find(".showitem").attr("sel","0");
                    for(var i=0; i<subSize; i++ ){
                      if( orderCheck[i] == true ){
                        box.find(".showitem").eq(i).addClass("addstyle").attr("check","1");
                        box.find(".showitem").eq(i).attr("pair",orderPair[i]);
                      }
                      else {
                        box.find(".showitem").eq(i).removeClass("addstyle").attr("check","0");
                        box.find(".showitem").eq(i).removeAttr("pair");
                      }
                    }
                    var sizeL = part1.find("addstyle").size();
                    var sizeR = part2.find("addstyle").size();
                    box.find("span[sel='1']").removeClass("addstyle");
                    if( sizeL != sizeR ) {
                      alert("size");
                    }

                  }

                }else{
                  part1.children("span").each(function(index, element) {
                    if($(this).attr('sel')==1){
                      mx.push($(this).attr('left'));
                      my.push($(this).attr('top'));
                      ms.push(0);
                      $(this).attr("check","1");
                      $(this).attr("sel","0");
                      $(this).attr("pair",pair);
                      pairl.push(pair);
                      mxid.push($(this).attr('id'));
                    }
                  });

                  part2.children("span").each(function(index, element) {
                    if($(this).attr('sel')==1){
                      mx.push($(this).attr('left'));
                      my.push($(this).attr('top'));
                      ms.push(1);
                      $(this).attr("check","1");
                      $(this).attr("sel","0");
                      $(this).attr("pair",pair);
                      pairr.push(pair);
                      myid.push($(this).attr('id'));
                    }
                  });
                  pair+=1;
                  part1.attr('first',0);
                  part2.attr('first',0);
                  strockline();
                };
              }else{
                part1.children("span").each(function(index, element) {
                  if($(this).attr('sel')==1){
                    if($(this).attr('check')==0){
                      $(this).attr("sel","0").removeClass("addstyle");
                    }else{
                      $(this).attr("sel","0").addClass("addstyle");
                    };
                  }
                });
                part1.attr('first',0);
                part2.children("span").each(function(index, element) {
                  if($(this).attr('sel')==1){
                    if($(this).attr('check')==0){
                      $(this).attr("sel","0").removeClass("addstyle");
                    }else{
                      $(this).attr("sel","0").addClass("addstyle");
                    };
                  }
                });
                part2.attr('first',0);
              };
            }else{
              part1.children("span").each(function(index, element) {
                if($(this).attr('check')==0){
                  if($(this).attr('sel')==1){
                    $(this).attr("sel","0").removeClass("addstyle");
                  };
                }else{
                  if($(this).attr('sel')==1){
                    $(this).attr("sel","0").addClass("addstyle");
                  };
                };
              });
              part1.attr('first',0);
              part2.children("span").each(function(index, element) {
                if($(this).attr('check')==0){
                  if($(this).attr('sel')==1){
                    $(this).attr("sel","0").removeClass("addstyle");
                  };
                }else{
                  if($(this).attr('sel')==1){
                    $(this).attr("sel","0").addClass("addstyle");
                  };
                };
              });
              part2.attr('first',0);
            };
          }else{
            part1.children("span").each(function(index, element) {
              if($(this).attr('check')==0){
                if($(this).attr('sel')==1){
                  $(this).attr("sel","0").removeClass("addstyle");
                };
              };
            });
            part1.attr('first',0);
            part2.children("span").each(function(index, element) {
              if($(this).attr('check')==0){
                if($(this).attr('sel')==1){
                  $(this).attr("sel","0").removeClass("addstyle");
                };
              };
            });
            part2.attr('first',0);
          };
          clearbackline();
          groupstate = false;

          // 如果当前元素存在并已正确连线连线
          if (startDom.attr('check') === '1' && targettrue && targettrue.attr('check') === '1') {
            // VUE组件内部数据修改
            let data = getListPair();
            if (data.length) vueThis.getOptions(data)
          }
        };
        // event.preventDefault();
      }
    }
    var context = canvas.getContext('2d');
    var lastX, lastY;

    function strockline() {
      context.clearRect(0, 0, box.find(".show").width(), box.find(".show").height());
      context.save();
      context.beginPath();
      context.lineWidth = linewidth;
      for (var i = 0; i < ms.length; i++) {
        lastX = mx[i];
        lastY = my[i];
        if (ms[i] == 0) {
          context.moveTo(lastX, lastY);
        } else {
          context.lineTo(lastX, lastY);
        }
      }
      context.strokeStyle = linestyle;
      context.stroke();
      context.restore();
    }

    function strockline2(pairSet) {
      context.clearRect(0, 0, box.find(".show").width(), box.find(".show").height());
      context.save();
      context.beginPath();
      context.lineWidth = linewidth;
      var clearLine = pairSet;
      for (var i = 0; i < ms.length; i++) {
        if (clearLine == i) {
          mx[i] = null;
          my[i] = null;
        }
        if ((clearLine + 1) == i) {
          mx[i] = null;
          my[i] = null;
        }
        lastX = mx[i];
        lastY = my[i];
        if (ms[i] == 0) {
          context.moveTo(lastX, lastY);
        } else {
          context.lineTo(lastX, lastY);
        }
      }
      context.strokeStyle = linestyle;
      context.stroke();
    }

    function clearline() {
      context.clearRect(0, 0, box.find(".show").width(), box.find(".show").height());
      mx = [];
      my = [];
      ms = [];
      pairl = [];
      pairr = [];
      pair = 0;
      part1.children("span").each(function (index, element) {
        $(this).removeClass("addstyle");
        $(this).attr("sel", "0");
        $(this).attr("check", "0");
        $(this).removeAttr("pair");
      });
      part1.attr('first', 0);
      part2.children("span").each(function (index, element) {
        $(this).removeClass("addstyle");
        $(this).attr("sel", "0");
        $(this).attr("check", "0");
        $(this).removeAttr("pair");
      });
      part2.attr('first', 0);
    }
    var backcanvas = backcanvas.getContext('2d');

    function backstrockline() {
      backcanvas.clearRect(0, 0, box.find(".show").width(), box.find(".show").height());
      backcanvas.save();
      backcanvas.beginPath();
      backcanvas.lineWidth = linewidth;
      backcanvas.moveTo(mid_startx, mid_starty);
      backcanvas.lineTo(Math.floor(mid_endx), Math.floor(mid_endy));
      backcanvas.strokeStyle = linestyle;
      backcanvas.stroke();
      backcanvas.restore();
    }

    function clearbackline() {
      backcanvas.clearRect(0, 0, box.find(".show").width(), box.find(".show").height());
      mid_startx = null;
      mid_starty = null;
      mid_endx = null;
      mid_endy = null;
    }
    $(".resetCanvasBtn").click(function () {
      clearline();
    });
    $(".goBackBtn").click(function () {
      goBack();
    });

    function getListPair() {
      /*
      * 由于组件部分复用性高，导致页面在渲染过程中读取了旧DOM元素，渲染完成后旧DOM元素被替代
      * 此时程序已经执行完毕，控制台旧DOM元素可输出，但不可见，引发bug
      * 判断容器是否可见，如果不可见则返回空数组，防止页面报错影响连线准确性
      * */
      if (!$(part1[0]).is(':visible')) return []
      var index;
      var leftVal, rightVal, nowVal;
      var sum = Number(pair) * 2;
      var pairA = new Array(sum);
      var size = part1.find(".showitem").size();
      for (var i = 0; i < size; i++) {
        if (part1.find(".showitem").eq(i).hasClass("addstyle") == true) {
          nowVal = part1.find(".showitem").eq(i).attr("pair");
          leftVal = parseInt(nowVal) * 2;
          pairA[leftVal] = i;
        }
      }
      for (var i = 0; i < size; i++) {
        if (part2.find(".showitem").eq(i).hasClass("addstyle") == true) {
          nowVal = part2.find(".showitem").eq(i).attr("pair");
          rightVal = parseInt(nowVal) * 2 + 1;
          pairA[rightVal] = i;
        }
      }
      var idStr;
      var idAttr = [];
      for (var i = 0; i < sum; i++) {
        if (typeof pairA[i] != "undefined") {
          if (i % 2 == 0) {
            idStr = part1.find(".showitem").eq(pairA[i]).attr("data-id");
          } else {
            idStr = idStr + ":" + part2.find(".showitem").eq(pairA[i]).attr("data-id");
            idAttr.push(idStr);
            idStr = null;
          }
        }
      }
      return idAttr;
    }

    function saveListPair() {
      var size = box.find(".showitem").size();
      var listPair = new Array(size);
      for (var i = 0; i < size; i++) {
        if (box.find(".showitem").eq(i).hasClass("addstyle") == true) {
          listPair[i] = box.find(".showitem").eq(i).attr("pair");
        } else {
          listPair[i] = null;
        }
      }
    }

    function newCanvas() {
      /*var leftPair = new Array();
      leftPair[0] = null;
      leftPair[1] = 2;
      leftPair[2] = 3;
      leftPair[3] = 4;
      leftPair[4] = 5;
      leftPair[5] = null;
      var rightPair = new Array();
      rightPair[0] = 3;
      rightPair[1] = 4;
      rightPair[2] = null;
      rightPair[3] = null;
      rightPair[4] = 2;
      rightPair[5] = 5;*/
      var leftPair = leftData;
      var rightPair = rightData;
      if (regainCanvas == true) {
        var pairA = new Array(sum);
        var size = part1.find(".showitem").size();
        var lastPair = parseInt(box.attr("data-pair"));
        var index;
        var leftVal, rightVal, nowVal;
        var sum = lastPair * 2;
        for (var i = 0; i < size; i++) {
          if (typeof leftPair[i] == "number") {
            nowVal = leftPair[i];
            leftVal = parseInt(nowVal) * 2;
            pairA[leftVal] = i;
            part1.find(".showitem").eq(i).addClass("addstyle").attr("check", "1").attr("pair", leftPair[i]);
          } else {
            part1.find(".showitem").eq(i).removeClass("addstyle").attr("check", "0").removeAttr("pair");
          }
          if (typeof rightPair[i] == "number") {
            nowVal = rightPair[i];
            rightVal = parseInt(nowVal) * 2 + 1;
            pairA[rightVal] = i;
            part2.find(".showitem").eq(i).addClass("addstyle").attr("check", "1").attr("pair", rightPair[i]);
          } else {
            part2.find(".showitem").eq(i).removeClass("addstyle").attr("check", "0").removeAttr("pair");
          }
        }
        var leftPoint;
        var topPoint;
        for (var i = 0; i <= (sum + 2); i++) {
          if (typeof pairA[i] !== "undefined") {
            if (i % 2 == 0) {
              leftPoint = parseInt(part1.find(".showitem").eq(pairA[i]).attr("left"));
              topPoint = parseInt(part1.find(".showitem").eq(pairA[i]).attr("top"));
              mx[i] = leftPoint;
              my[i] = topPoint;
              ms[i] = 0;
            } else {
              leftPoint = parseInt(part2.find(".showitem").eq(pairA[i]).attr("left"));
              topPoint = parseInt(part2.find(".showitem").eq(pairA[i]).attr("top"));
              mx[i] = leftPoint;
              my[i] = topPoint;
              ms[i] = 1;
            }
          } else {
            mx[i] = null;
            my[i] = null;
            ms[i] = 0;
          }
        }
        strockline();
      }
    }
    if (setCanvas) {
      newCanvas();
    }
    $(".getPair").click(function () {
      getListPair();
    });
    box.find(".savePair").click(function () {
      newCanvas();
    });

    function goBack() {
      var linenlastIndex = ms.join("").substr(0, ms.length - 1).lastIndexOf("0");
      if (linenlastIndex == 0) {
        clearline();

        // VUE组件内部数据修改
        vueThis.resetLine();
      } else {
        mx = mx.slice(0, linenlastIndex);
        my = my.slice(0, linenlastIndex);
        ms = ms.slice(0, linenlastIndex);
        context.clearRect(0, 0, box.find(".show").width(), box.find(".show").height());
        context.save();
        context.beginPath();
        context.lineWidth = linewidth;
        for (var i = 0; i < ms.length; i++) {
          lastX = mx[i];
          lastY = my[i];
          if (ms[i] == 0) {
            context.moveTo(lastX, lastY);
          } else {
            context.lineTo(lastX, lastY);
          }
        }
        context.strokeStyle = linestyle;
        context.stroke();
        context.restore();
        var pairindex = pairl.length - 1;
        part1.children("span").each(function (index, element) {
          if ($(this).attr("pair") == pairl[pairindex]) {
            $(this).removeClass("addstyle");
            $(this).attr("sel", "0");
            $(this).attr("check", "0");
            $(this).removeAttr("pair");
          }
        });
        part1.attr('first', 0);
        part2.children("span").each(function (index, element) {
          if ($(this).attr("pair") == pairl[pairindex]) {
            $(this).removeClass("addstyle");
            $(this).attr("sel", "0");
            $(this).attr("check", "0");
            $(this).removeAttr("pair");
          }
        });
        part2.attr('first', 0);
        if (pair) {
          pair -= 1;
        } else {
          pair = 0;
        }
        pairl = pairl.slice(0, pairindex);
        pairr = pairr.slice(0, pairindex);

        // VUE组件内部数据修改
        if (vueThis.currentPair) {
          vueThis.currentPair -= 1;
        } else {
          vueThis.currentPair = 0;
        }

        vueThis.connectLeftOptions.forEach(item => {
          if (item.pair === pair) {
            item.pair = '';
          }
        })
        vueThis.connectRightOptions.forEach(item => {
          if (item.pair === pair) {
            item.pair = '';
          }
        })
      }
    }
  }
})(jQuery);
