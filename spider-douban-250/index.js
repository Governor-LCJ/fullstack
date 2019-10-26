//爬取数据

const http = require('http');//请求本地服务器
http.createServer((req,res) =>{
    doubanSpider('https://movie.douban.com/top250',(data) => {
        console.log('data', data)
        res.writeHead(200, {
            //text/plain 纯文本
            //text/html html
            //mime类型
            'Content-type':'application/json',
            'Access-Control-Allow-origig':'*'
        })
        .end(JSON.stringify(data))
    })
}).listen(3000, () => {

})

const https = require('https');
const cheerio = require('cheerio');
doubanSpider('https://movie.douban.com/top250', (data) => {
    //得到结果
    console.log(data)
})

function doubanSpider(url, cb) {
    https.get(url,
        (res) => {
            let html = '';
            //以流的形式
            res.on('data', (chunk) => {
                html += chunk;
            })
            res.on('end', () => {
                console.log(html);
                const $ = cheerio.load(html);
                let movies = [];
                $('li .item').each(function() {
                    //拿到每一部电影
                   
                    const picUrl = $('.pic img', this).attr('src');
                    const title = $('.info .title', this).text();
                    const star = $('.star .rating_num', this).text();
                    const inq = $('.inq', this).text();
                    // cb({
                    //     picUrl,
                    //     title,
                    //     star,
                    //     inq
                    // })
                    movies.push({
                        picUrl,
                        title,
                        star,
                        inq
                    })
                })
            })
        })
}