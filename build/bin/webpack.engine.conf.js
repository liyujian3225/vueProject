//文件系统操作具有同步性、回调性、基于promise的形式
const fs = require('fs');


fs.readFile('build/demo.js', 'utf-8', (err, data) => {
  console.log(chalk.red('开始读取文件...'));
  if (err) throw err;
  console.log(chalk.red('文件读取成功...\n'));
  console.log(chalk.blue(data));
});
