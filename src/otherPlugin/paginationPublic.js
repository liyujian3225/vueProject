/*
* @Author: LYJ
* @Date: 2020年2月15日16:31:25
* @Last Modified by: LYJ
* @Describe: 独立分页组件公共文件
*/

export default {
  // 分页改变触发
  paginatiChange(pageNumber, that) {
    that.currentPage = pageNumber;
    that.getList();
  },

  // 改变一页显示几条
  showSizeChange(currentPage, pageSize, that) {
    that.currentPage = currentPage;
    that.pageSize = pageSize;
    that.getList();
  },

  // 总条数格式化显示
  showTotal(total, that) {    //显示总页数总条数
    let pageNum = Math.ceil(total / that.pageSize);
    return '共 ' + pageNum + '页' + '/' + total + ' 条数据';
  },
}

