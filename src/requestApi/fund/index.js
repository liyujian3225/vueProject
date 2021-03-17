/**
 * @Author: icanf
 * @Date: 2021-03-15
 * @Project: vueProject
 */

/* 导入axios实例 */
import axios from '../httpAxios';

const fundApi = {
  //  基金信息
  getFundDetail (params) {
    return axios({
      url: `/alicloudapi/getFundDetail`,
      method: 'get',
      params: params,
    });
  },
  //  基金走势数据
  getFundYield (params) {
    return axios({
      url: `/alicloudapi/queryFundYield`,
      method: 'get',
      params: params,
    });
  }

};
export default fundApi