/*
* 用户与命令行交互的工具
* type：表示提问的类型，包括：input, confirm, list, rawlist, expand, checkbox, password, editor；
* name: 存储当前问题回答的变量；
* message：问题的描述；
* default：默认值；
* choices：列表选项，在某些type下可用，并且包含一个分隔符(separator)；
* validate：对用户的回答进行校验；
* filter：对用户的回答进行过滤处理，返回处理后的值；
* transformer：对用户回答的显示效果进行处理(如：修改回答的字体或背景颜色)，但不会影响最终的答案的内容；
* when：根据前面问题的回答，判断当前问题是否需要被回答；
* pageSize：修改某些type类型下的渲染行数；
* prefix：修改message默认前缀；
* suffix：修改message默认后缀。
* ————————————————
* 版权声明：本文为CSDN博主「xhsdnn」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
* 原文链接：https://blog.csdn.net/qq_26733915/article/details/80461257
* */
const inquirer = require('inquirer');
const promptList = [
  {
    type: 'input',
    message: '输入您的姓名：',
    name: 'name',
    default: '张三',
    transformer: function (v) {
      return v + '@'
    },
  },
  {
    type: 'input',
    message: '请输入手机号:',
    name: 'phone',
    validate: function (val) {
      if (val.match(/\d{11}/g)) { // 校验位数
        return true;
      }
      return "请输入11位数字";
    }
  },
  {
    type: 'confirm',
    message: 'Are you handsome?',
    name: 'hanSome',
    default: true,
    prefix: 'hello,'
  },
  {
    type: 'rawlist',
    message: '比谁帅：',
    name: 'hsPerson',
    choices: [
      '吴彦祖',
      '彭于晏',
    ],
    when: function(answers) {
      return answers.hanSome;
    },
  },
  {
    type: 'list',
    message: '请选择填写时间',
    name: 'date',
    suffix: '时间：',
    choices: [
      '2021-05-12',
      '2021-05-13',
      '2021-05-14',
      '2021-05-15',
      '2021-05-16',
      '2021-05-17',
    ],
    filter: function (val) { // 使用filter将回答变为小写
      return val.replace(/-/g, '/');
    },
    pageSize: 2,
  },
  {
    type: 'expand',
    message: '请选择性格类型：',
    name: 'character',
    choices: [
      {
        key: 'g',
        name: '阳光',
      },
      new inquirer.Separator("--- 分隔符 ---"),
      {
        key: 'b',
        name: '阴暗',
      },
    ]
  },
  {
    type: 'checkbox',
    message: '请选择颜色：',
    name: 'color',
    choices: [
      {
        name: "red"
      },
      new inquirer.Separator(), // 添加分隔符
      {
        name: "blur",
        checked: true // 默认选中
      },
      {
        name: "green"
      },
      new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
      {
        name: "yellow"
      }
    ],
  },
  {
    type: "password",
    message: "请输入密码：",
    name: "pwd"
  },
  {
    type: "editor",
    message: "请输入备注：",
    name: "editor"
  }
]
inquirer.prompt(promptList).then((answers) => {
  console.log('\n');
  console.log(answers);
}).catch(error => {
  if(error.isTtyError) {

  } else {

  }
});
