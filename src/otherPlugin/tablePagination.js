/*
* @Author: LYJ
* @Date: 2020-06-30 17:50
* @Last Modified by: LYJ
* @Describe: 表格数据及分页器
* @param {that} VUE实例对象this
*/
export default function (that) {
  return {
    tableDataSource: [],                  // 表格数据
    tableLoading: false,                  // 表格加载中
    selectedRowId: [],                    // 当前选中的数据id
    selectedRowDetail: {},                // 当前选中行的详细数据
    pagination: {                         // 分页器配置项
      total: null,                        // 总条数
      pageSize: 10,                       // 每页条数
      current: 1,                         // 当前第几页
      showSizeChanger: true,              // 一页显示多少条
      showQuickJumper: true,              // 跳转至几页
      // pageSizeOptions: ['2', '4', '6', '8', '10'],
      onShowSizeChange(current, pageSize) {
        that.pagination.pageSize = pageSize;
      },
      showTotal(total, range) {
        //显示总页数总条数
        let pageNum = Math.ceil(total / this.pageSize);
        return "共 " + pageNum + "页" + "/" + total + " 条数据";
      }
    },
    // 表格数据发生变化时(翻页、过滤、排序)
    handleTableChange: {
      change: (that, pagination, sorter) => {
        if (sorter && sorter.column && sorter.order) {
          that.sendData.orderField = sorter.column.field;
          sorter.order === 'ascend' ? that.sendData.orderType = 'ASC' : that.sendData.orderType = 'DESC';
          that.getList();
        } else {
          if (JSON.stringify(sorter) === '{}' || !sorter) {
            const pager = {...that.pagination};
            pager.current = pagination.current;
            that.pagination = pager;
            that.getList();
          } else {
            that.sendData.orderField = undefined;
            that.sendData.orderType = undefined;
          }
        }
      }
    },
  }
}
