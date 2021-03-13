/*
* @Author: LYJ
* @Date: 2019年10月28日15:10:02
* @Last Modified by: LYJ
* @Describe: 共用的自定义校验表单项
*/

const checkRule = {
  // 自定义校验是否存在空格
  checkSpace(rule, value, callback) {
    const emptyReg=/\s+/g;
    if (emptyReg.test(value)) {
      callback('输入内容不可以包含空白符号');
      return;
    }
    callback();
  },

  // 自定义校验密码
  checkPassword (rule, value, callback) {
    // const reg = /^(\d|[A-Za-z]|([\x21-\x26]|\x2a|\x2e|\x40|\x5e)){6,20}$/;
    const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/;
    const emptyReg=/^\s+$/g;
    let str = value;
    if (str === undefined || str === ''){
      callback('请输入密码');
      return;
    }
    if (!reg.test(str) || emptyReg.test(str)) {
      callback('请输入8-20位字符，数字、字母、特殊符号至少包含两种');
      return;
    }
    callback();
  },

  // 自定义校验手机号
  checkPhone (rule, val, callback) {
    // const reg = /^1(([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    const reg = /^1(([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9]))[0-9]{8}$/;
    let emptyReg=/^\s+$/g;
    let str = val;
    if (str === undefined || str === ''){
      callback('请输入手机号');
      return;
    }
    if (emptyReg.test(str)) {
      callback('输入内容不可以包含空白符号');
      return;
    }
    if (reg.test(str)) {
      callback();
      return;
    }
    callback('请输入正确的手机号格式');
  },

  // 自定义校验小数（1-2位）
  checkFloatNum(rule, val, callback) {
    const reg = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/;
    let str = val;
    if (str === undefined || str === ''){
      callback('该字段不能为空！');
      return;
    }
    if (reg.test(str)) {
      callback();
      return;
    }
    callback('请输入正确的数字（小数）格式！');
  },

  // 自定义校验正整数
  checkInteger(rule, val, callback){
     const reg = /^(0|[1-9][0-9]*)(\[0-9]*)?$/;
    let str = val;
    if (str === undefined || str === ''){
      callback('该字段不能为空！');
      return;
    }
    if (reg.test(str)) {
      callback();
      return;
    }
    callback('请输入正确的格式！');
  },

      // 自定义校验正整数
      checkInt(rule, val, callback){
        const reg = /^(0|[1-9][0-9]*)(\[0-9]*)?$/;
       let str = val;
  
       if (str === undefined || str === '') {
        console.log(str);
        callback();
        return;
      }
       if (reg.test(str)) {
         callback();
         return;
       }
       callback('请输入整数格式！');
     },
  // 大于0 的正整数
  checkIntegerZero(rule, val, callback){
    // const reg = /^(0|[1-9][0-9]*)(\[0-9]*)?$/;
    const reg = /^\+?[1-9]\d*$/;
    let str = val;
    if (str === undefined || str === ''){
      callback('该字段不能为空！');
      return;
    }
    if (reg.test(str)) {
      callback();
      return;
    }
    callback('请输入大于0的正整数');
  },

  // 自定义校验http地址格式
  checkUrl(rule, value, callback){
    let reg = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
    let str = value;
    if (str === undefined || str === ''){
      callback('该字段不能为空!');
      return;
    }
    if (reg.test(str)) {
      callback();
      return;
    }
    callback('网址格式不正确!');
  },

  // 自定义校验邮箱地址
  checkEmail(rule, value, callback) {
    let reg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
    let str = value;
    if (str === undefined || str === ''){
      callback('请输入邮箱地址');
      return;
    }
    if (reg.test(str)) {
      callback();
      return;
    }
    callback('邮箱格式不正确');
  },

  // 自定义校验英文数字和下划线和横线
  checkEnStr(rule, value, callback) {
    const reg = /^[A-Za-z0-9-_]+$/;
    let str = value;
    if (str === undefined || str === ''){
      callback('该字段不能为空！');
      return;
    }
    if (reg.test(str)) {
      callback();
      return;
    }
    callback('此字段由英文数字下划线或横线组成！');
  },
  // 校验身份证
  validateCard(rule, value, callback){
    // let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    let reg =/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;
    if (value === undefined || value === "") {
      callback('该字段不能为空！');
      return;
    }
    if (!reg.test(value)) {
      callback(new Error("请输入正确的身份证号码"));
    }
    callback()
  },
  // form 表单只有一个空格验证    true  存在一个空格
  noEmptyValidata(rule, value, callback){
    let reg=/^\s+$/g;
    let str =value;
    if(str===undefined|| str ===''){
      callback();
      return;
    }
    if (reg.test(str)) {
      callback('输入内容不可以包含空白符号');
      return;
    }
    callback()
  },
  // 校验中文、字母或组合
  checkName(rule, value, callback) {
    const emptyReg=/\s+/g;
    if (emptyReg.test(value)) {
      callback('输入内容不可以包含空白符号');
      return;
    }
    const reg = /^([\u4e00-\u9fa5]|[A-Za-z])+$/;
    if(!reg.test(value)) {
      callback('请输入汉字、字母或者二者组合格式');
      return;
    }
    callback();
  },
   //form 只能输入中文
  olnyChinese(rule, value, callback){
    let reg = /^[\u4e00-\u9fa5]+$/;
    let str =value;
    if(str===undefined|| str ===''){
      callback('该字段不能为空');
      return;
    }
    if(!reg.test(str)) {
      callback('只能输入中文汉字');
      return;
    }
    if(str.length>1){
      callback('只能输入1位汉字');
      return;
    }
    callback();
  },
    //form 只能输入中文
    olnyEnglish(rule, value, callback){
   
      let str =value;
      if(str===undefined|| str ===''){
        callback('该字段不能为空');
        return;
      }

      if(str.length>1){
        callback('只能输入1个字符');
        return;
      }
      callback();
    },
  // 名字验证(2-5位汉字)
  validateName(rule, value, callback){
    let reg = /^[\u4e00-\u9fa5]+$/;
    let str =value;
    if(str===undefined|| str ===''){
      callback('该字段不能为空');
      return;
    }
    if(!(str.length>=2&&str.length<=5)){
      callback('请输入2-5位汉字');
      return;
    }
    if(!reg.test(str)) {
      callback('只能输入中文汉字');
      return;
    }
    callback();
  },
 // 名称验证(20位)
 validate(rule, value, callback){
  let str =value;
  if(str===undefined|| str ===''){
    callback('该字段不能为空');
    return;
  }
  if(!(str.length<=20)){
    callback('名称最长不得超过20位');
    return;
  }
  callback();
},
};

export default checkRule
