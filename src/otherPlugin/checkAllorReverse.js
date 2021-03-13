/*
* @Author: LYJ
* @Date: 2019年12月20日21:02:54
* @Last Modified by: LYJ
* @Describe: 全选/反选操作
*/

/*
* 以下所有的that后调用的变量名保持一致，即在data中声明的变量
* 当在子组件中使用此功能时，值为data或者props中的变量
* selectedRowKeys   当前选中数据的id数组
* indeterminate     全选按钮的半选中状态
* isCheckAll        控制全选按钮的checkboc是否选中，即全选或者全不选
* allIds            当前页面中请求回来后的所有数据的id数组，此值需要自己进行处理。
*                   this.dataSource.forEach( val => { this.allIds.push(val.entityId) } );
* */

const checkOperation = {
  /*
  * 单个选择
  * selectedRowKeys    当前选中的数据(如果是表格则对应的是表格行的key值，所以表格行key绑定成entityId)
  *                    :rowKey="record => record.entityId"   antd切换表格行的key为数据的entityId
  * that               this指针
  * */
  checkSingle(selectedRowKeys, that) {
    that.selectedRowKeys = selectedRowKeys;
    that.indeterminate = !!selectedRowKeys.length && selectedRowKeys.length < that.allIds.length;
    that.isCheckAll = selectedRowKeys.length === that.allIds.length;
  },

  /*
  * 全选
  * e     全选按钮点击时的第一个参数，事件对象
  * that  this指针
  * */
  checkAll(e, that) {
    Object.assign(that, {
      selectedRowKeys: e.target.checked ? that.allIds : [],         // 重置当前选中的数组
      indeterminate: false,                                         // 更改全选按钮的半选状态
      isCheckAll: e.target.checked                                  // 更改全选按钮是否选中
    });
  },

  /*
  * 反选
  * that    this指针
  * */
  checkReverse(that) {
    let temp = [];
    that.allIds.forEach(id=>{
      // 如果已选的id数组中不包含所有id中的某一个，则把这个id添加到临时数组中。
      !that.selectedRowKeys.includes(id) && temp.push(id)
    });
    that.selectedRowKeys = temp;

    that.indeterminate = !!that.selectedRowKeys.length && that.selectedRowKeys.length < that.allIds.length;
    that.isCheckAll = that.selectedRowKeys.length === that.allIds.length;
  }
};

export default checkOperation
