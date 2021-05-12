//第三方模块包，可以在控制台改变字体颜色
const chalk = require('chalk');
//第三方模块包，以包的方式包装 rm -rf 命令，用来删除文件与文件夹
const rm = require('rimraf');
//自带模块，处理文件和目录的路径
const path = require('path');

const baseName = path.basename('build/bin/测试.txt', '.txt');
const dirName = path.dirname('build/bin/测试.txt');
const extName = path.extname('build/bin/测试.txt');
const pathParse = path.parse('build/bin/测试.txt');

console.log(`${'文件名称：' + chalk.red(baseName)}\n${'文件路径：' + chalk.red(dirName)}\n${'文件后缀：' + chalk.red(extName)}\n`);
console.log(pathParse);
console.log('\n' + path.format(pathParse) + '\n');
console.log(path.isAbsolute(dirName));
console.log('\n' + path.join('/a', '/b'));

rm('dist', err => {
  if(err) throw err;
  console.log(chalk.red('dist包删除成功...'));
});
