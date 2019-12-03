const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url)// __dirname:文件运行当前目录
  
  fs.stat(filePath, (err, status) => {
    if (err) {
      res.statusCode = 404;
      res.end(`${filePath}:404`);
      return ;
    }
    if (status.isFile()) {
      res.statusCode = 200;
      fs.createReadStream(filePath).pipe(res);
    } else if (status.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        let fileLink = files.map(file => {
          return `<a href='${req.url ==='/' ? '' : req.url + '/'}${file}'>${file}</a><br>`
        }).join('')
        res.end(fileLink)
      });
    }
  }) // stat:文件属性
}).listen(3000, () => {
  console.log('server http://localhost:3000 is running')
})