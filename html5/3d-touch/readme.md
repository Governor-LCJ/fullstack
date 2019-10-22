- live-server
  http服务
  http是web的底层

- node 内建http模块
  http.createServer((req,res)=>{
      console.log(req.url);
  }).listen(1314)
  一直伺服
  www.baidu.com  www.baidu.com