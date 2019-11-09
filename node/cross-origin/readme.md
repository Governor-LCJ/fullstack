## 跨域
  浏览器的安全策略：
  两个服务需要通信需要遵守同源策略：同协议，同域名，同端口号
  同源才会让你发送请求
  不同源 就产生跨域
  
  http://localhost：8080/index.html
  http://localhost.com/api/v1

  baidu.com     api.baidu.com

## cors
  cross-origin-resource-share<!-- 跨域资源共享 -->
  一个规范，允许服务器声明哪些源跨域访问

## 请求的步骤
  1. 简单请求：直接发起跨域请求（表单请求等）
  2. 复杂请求：先发起 预检（preFlight）请求，预先试探一下服务端支不支持跨域，之后才会发起正式的跨域请求

  简单请求，表单可以构造的请求

## jsonP
link script img: 不受同源策略的影响