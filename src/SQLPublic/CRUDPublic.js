/*
* @Author: LYJ
* @Date: 2020-08-03 18:20
* @Last Modified by: LYJ
* @Describe: 数据增删改查公共操作
*/
const operation = {
  /**
   * 查询数据共用的方法
   * that             this指针
   * searchKey        搜索的关键字
   * apiModulesName   接口模块的名称
   * callback         响应成功后对数据进行处理的回调函数
   * otherOptions     额外需要的参数
   * */
  getList(that, searchKey, apiModulesName, callback, otherOptions = null) {
    that.tableLoading = true;  //表格数据加载中loading
    let sendData = {
      start: that.pagination.current,
      limit: that.pagination.pageSize,
      ...searchKey
    };
    that.$api[apiModulesName].getList(sendData).then(res => {
      if (res.data.status === '99') {
        callback(res.data.extra);
      }
      that.tableLoading = false;
    }).catch(() => {
      that.tableLoading = false;
    });
  },

  /**
   * 添加保存共用的方法
   * that             this指针
   * values           要发送请求的数据
   * apiModulesName   接口模块的名称
   * callback         添加成功后对当前表单进行处理的回调函数
   * */
  addSave: (that, values, apiModulesName, callback = null, isContinue = false) => {
    that.disableForm = true;     //禁用输入框
    that.$api[apiModulesName].doAdd(values).then(res => {
      if (res.data.status === '99') {
        // that.addVisible = false;   //关闭弹窗
        that.addVisible = isContinue;
        that.$message.success('添加成功');
        that.getList();
        if (callback !== null) {
          callback();
        }
      }
      that.disableForm = false;
    }).catch((err) => {
      that.disableForm = false;
    });
  },

  /**
   * 编辑保存共用的方法
   * that             this指针
   * values           要发送请求的数据
   * apiModulesName   接口模块的名称
   * callback         对要提交的数据进行二次处理的回调函数
   * */
  editSave: (that, values, apiModulesName, callback = null) => {
    let isEdit = false;
    // 检测是否存在编辑
    for (let item in values) {
      if (values[item] === that.editSingleData[item]) {
        isEdit = false;
      } else {
        isEdit = true;
        break;
      }
    }
    if (!isEdit) {
      // that.$message.info('没有修改数据，无需保存。');
      that.editVisible = false;
      that.disableForm = false;
      that.editSingleData = {};
      return;
    }
    that.disableForm = true;       //输入框禁用防误操作
    that.$api[apiModulesName].doEdit(values).then((res) => {
      if (res.data.status === '99') {
        that.editVisible = false;  //关闭弹窗
        that.$message.success('修改成功');
        that.getList();
        if (callback !== null) {
          callback();
        }
      }
      that.disableForm = false;  //启用输入框
    }).catch((err) => {
      that.disableForm = false;
    });
  },

  /**
   * 单个删除共用的方法
   * that             this指针
   * id               要删除的数据id
   * apiModulesName   接口模块的名称
   * */
  singleDel: (that, id, apiModulesName) => {
    // 未选中删除
    let sendData = {};
    sendData.id = id;
    if (that.pagination.current > 1 && that.tableDataSource.length === 1) {  // 如果当前页只剩一条时删除后向前跳转
      that.pagination.current = that.pagination.current - 1;
    }
    that.$api[apiModulesName].doDel(sendData).then(res => {
      if (res.data.status === '99') {
        that.$message.success('删除成功');
        that.selectedRowId = [];
        that.getList();
      }
    });
  },

  /**
   * 单个/批量删除共用的方法
   * that             this指针
   * apiModulesName   接口模块的名称
   * type             删除方式  single单个删除   batch批量删除
   * */
  deleteData: (that, apiModulesName, type, ids) => {
    if (type === 'single') {
      let sendData = {};
      sendData.ids = ids;
      if (that.pagination.current > 1 && that.tableDataSource.length === 1) {  // 如果当前页只剩一条时删除后向前跳转
        that.pagination.current = that.pagination.current - 1;
      }
      operation.deletePublic(that, apiModulesName, sendData);
    } else if (type === 'batch') {
      if (!that.selectedRowId.length) {
        that.$warning({
          title: '温馨提示',
          centered: true,
          content: '请先选择要删除的数据!'
        });
        return;
      }
      let sendData = {};
      sendData.ids = ids;
      that.$confirm({
        title: '批量删除数据',
        content: '删除后无法恢复',
        centered: true,
        okText: '删除',
        okType: 'danger',
        confirmLoading: false,
        iconType: 'exclamation-circle',
        onOk: () => {
          if (that.selectedRowId.length === that.tableDataSource.length) {
            that.pagination.current = that.pagination.current - 1;
          }
          operation.deletePublic(that, apiModulesName, sendData);
        }
      });
    }
  },
  deletePublic(that, apiModulesName, sendData) {
    that.$api[apiModulesName].doDel(sendData).then(res => {
      if (res.data.status === '99') {
        that.$message.success('删除成功');
        that.selectedRowId = [];
        that.getList();
      }
    });
  },

  /**
   * 获取要编辑数据详细信息的共用方法
   * that             this指针
   * id               要获取的数据id
   * apiModulesName   接口模块的名称
   * callback         获取成功后对当前数据进行二次处理的回调函数，默认为null
   * */
  getDetailById: (that, id, apiModulesName, callback = null) => {
    that.editSingleId = id;
    // 获取所编辑数据的详细信息
    that.$api[apiModulesName].detailInfo({ id }).then(res => {
      if (res.data.status === '99') {
        that.editSingleData = res.data.extra;
        if (callback !== null) {
          callback();
        }
      }
    });
  },
};
export default operation
