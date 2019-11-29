const http = require('http')

var server = http.createServer((req, res) => {
  console.log('req content', req.url)
  res.end('123')
})

server.listen(3000, () => {
  console.log('ok')
})