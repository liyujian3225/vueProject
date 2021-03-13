/*
* @Author: LYJ
* @Date: 2019年12月18日17:49:33
* @Last Modified by: LYJ
* @Describe: 表格拖拽
*/
import Sortable from "sortablejs"
const dargTable = {
  /*
  * 拖拽排序表格
  * _this    this指针
  * sortData    要排序的数据，必须要有order字段，具体值待后台调整，一般为order
  * handle   拖动的手柄类名(类名不加.)，可以不传，即整行都可以拖拽
  * */
  drag(_this, sortData, handle = '', callback = null) {
    const confirmTbody = document.querySelector('.dragTable .ant-table-body table tbody');

    // 排序
    function sort(evt, _this, data) {
      let newIndex = evt.newIndex;
      let oldIndex = evt.oldIndex;
      if (newIndex > oldIndex) {   //下移排序
        let tempArr = [];
        tempArr = data.slice(oldIndex, newIndex + 1);
        tempArr.forEach(val => {
          ++oldIndex;
          val.order = oldIndex;
        });
      } else {     // 上移排序
        let tempArr = [];
        tempArr = data.slice(newIndex, oldIndex + 1);
        tempArr.forEach(val => {
          ++newIndex;
          val.order = newIndex;
        });
      }
    }

    let handleStr = '';
    if (handle !== ''){
      handleStr = '.' + handle;
    }
    Sortable.create(confirmTbody, {
      animation: 300,
      handle: handleStr,
      ghostClass: 'blue-background-class',
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      onEnd(evt) {
        const currRow = sortData.splice(evt.oldIndex, 1)[0];
        sortData.splice(evt.newIndex, 0, currRow);
        sort(evt, _this, sortData);
        if (callback){
          callback();
        }
      },
    });
  }
};
export default dargTable
