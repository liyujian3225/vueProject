/**
 * @Author: LYJ
 * @Date: 创建时间
 * @Last Modified by: LYJ
 * @Describe 一个简单的函数防抖
 * @param that this指针
 * @param {Function} callback 需要限制执行频率的函数
 * @param {Number} delay 延迟时间，默认500毫秒，这段时间过后，才可触发第二次
 */
const debouncedFun = (that, callback, delay = 500) => {
  if (that.debouncedTimer) clearTimeout(that.debouncedTimer);
  that.debouncedTimer = setTimeout( () => {
    callback();
  }, delay);
}
export default debouncedFun
