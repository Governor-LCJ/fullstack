const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const KoaCors = require('koa-cors');
const KoaBody = require('koa-body');
const app = new Koa();
const router = new KoaRouter();
//单个路由的中间件
const path = require('path')
router.post('/upload', KoaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/static/'),
    keepExtensions: true,
    hash: true //hash 字符串（哈希字符串）MD5 sha256
  }
}), async (ctx) => {

  const diskPath = ctx.request.files.avatar.path;
  let fileName = path.basename(diskPath);
  ctx.body = {
    code: 200,
    url: `http://localhost:3000/${fileName}`
  }
})
//全局的
//顺序
app.use(KoaCors())
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is runing')
})