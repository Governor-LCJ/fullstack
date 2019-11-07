const http =require('http');
const fs =require('fs');
const urlModule =require('url');
const nodemailer = require('nodemailer')
const code = 23333;


// /register 展示 一个 注册html
//注册成功之后 展示 一个 成功的html
http.createServer((req,res)=>{
    const method =req.method;
    const url =req.url;
    const urlObj =urlModule.parse(url);
    console.log('url',url);
    if(url === '/register' && method ==='GET'){
        //req,res两个对象继承了流Stream 和 Event
        res.writeHead(200,{
            'Content-Type':'text/html;utf8'
        })
        fs.createReadStream('./register.html').pipe(res);
    }else if(urlObj.pathname === '/sendEmail' && method ==='GET'){
        const emailQs =urlObj.query;
        const email =emailQs.split('=')[1];
        const transport = nodemailer.createTransport({
            service:'qq',
            port:465,
            secureConnection:true,
            auth:{
                user:'1781675572@qq.com',
                pass:'dmsopdvamukfbabf'
            }
        })
        transport.sendMail({
            to:email,
            html:`<h2>${code}</h2>`,
            from:'1781675572@qq.com',
            subject:'xxx验证'
        }, (err, info) => {
            if(err) {

            } else{

            }
        })
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.end(JSON.stringify({
            code:500,
            email
        }))
    }else{
        res.end('访问出错');
    }
})
.listen(3344,()=>{
    console.log('server is running http://localhost:3344');
})
