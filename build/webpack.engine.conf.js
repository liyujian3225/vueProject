//文件系统操作具有同步性、回调性、基于promise的形式
const fs = require('fs');

fs.readFile('build/demo.js', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
