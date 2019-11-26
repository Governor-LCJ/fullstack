const Koa = require('koa');
const app = new Koa;
const fs = require('fs')
const KoaRouter = require('koa-router')
const router = new KoaRouter({prefix:'/api'})
//app.use 加载一个 中间件
//request -> response
//request -> middleWare1 -> middleWare2 -> response
//cts: { request, resonse }
router.get ('./user', async (ctx) => {
  let userInfo = fs.readFileSync('./api/user.json')
  .toString();
  ctx.body = {
    data:JSON.parse(userInfo),
    code: 200
  }
})
// app.use(async (ctx) => {
//   ctx.body = {
//     code: 2000,
//     msg: 'ok'
//   }
// })
app.listen(3000, () => {
  console.log('server is running http://localhost:3000')
})