const HTTP = require('http')
const fs = require('fs')

HTTP.createServer((req, res) => {
  // console.log(req.url)
  if (req.url === './欧气.jpg') {
    return ''
  }
  fs.createReadStream('./index.html').pipe(res);
}).listen(3000, () => {
  console.log("server http://localhost:3000 is running")
})