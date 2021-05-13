const moment = require('moment'), startUnix = moment().format('x');
const os = require('os');
const fs = require('fs');
const chalk = require('chalk');

const fileName = `${moment().format('X')}.txt`;
const [arch, platForm, release, totalMem, freeMem] = [
  os.arch(),
  os.platform(),
  os.release(),
  os.totalmem(),
  os.freemem(),
];
const osInfoContent =
  `日志记录于：${moment().format('YYYY-MM-DD HH:mm:ss')}\n\n` +
  `操作系统平台标识：${platForm}\n` +
  `操作系统：${release}\n` +
  `操作系统CPU架构：${arch}\n` +
  `系统内存量：${(totalMem / 1024 / 1024 / 1024).toFixed(1)}GB\n` +
  `空闲的系统内存量：${(freeMem / 1024 / 1024 / 1024).toFixed(1)}GB\n`;
fs.writeFile('src/assets/log/' + fileName, osInfoContent, function(err) {
  if(err) throw err;
  const endUnix = moment().format('x');
  console.log(
    chalk.bgGreen.black.bold(' DONE ') +
    chalk.green(` log.txt saved successfully in ${(endUnix - startUnix) + 'ms'}\n`)
  )
});


