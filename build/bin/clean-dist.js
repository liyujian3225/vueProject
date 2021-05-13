//第三方模块包，可以在控制台改变字体颜色
const chalk = require('chalk');
//第三方模块包，以包的方式包装 rm -rf 命令，用来删除文件与文件夹
const rm = require('rimraf');

rm('dist', err => {
  if(err) throw err;
  console.log(chalk.red('dist包删除成功...'));
});
