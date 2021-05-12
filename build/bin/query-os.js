const os = require('os');
const chalk = require('chalk');
const fs = require('fs');

const [arch, platForm, release, totalMem, freeMem] = [
  os.arch(),
  os.platform(),
  os.release(),
  os.totalmem(),
  os.freemem(),
];

console.log(chalk.red('以下信息即将写入osInfo.txt文件中...\n\n'));

const osInfoContent =
  `操作系统CPU架构：${arch}\n` +
  `操作系统平台标识：${platForm}\n` +
  `操作系统：${release}\n` +
  `系统内存量：${(totalMem / 1024 / 1024 / 1024).toFixed(1)}GB\n` +
  `空闲的系统内存量：${(freeMem / 1024 / 1024 / 1024).toFixed(1)}GB\n`;

console.log(osInfoContent);

fs.writeFile('build/bin/' + 'osInfo.txt', osInfoContent, function(err) {
  if(err) throw err;
  console.log(chalk.red('osInfo.txt保存成功！'))
});
