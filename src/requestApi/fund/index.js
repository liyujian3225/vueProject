/**
 * @Author: icanf
 * @Date: 2021-03-15
 * @Project: vueProject
 */

/* 导入axios实例 */
import axios from '../httpAxios';

const fundApi = {
  //  基金实时信息
  getFundDetail (params) {
    return axios({
      url: `/alicloudapi/getFundDetail`,
      method: 'get',
      params: params,
    });
  },

};
export default fundApi