//文件操作
const fs = require('fs')

fs.readFile('./index.html', (err, data) =>{
    fs.writeFile('./music-copy.html',data,(err, res) =>{
        if(!err) {
            console.log('writed!!!');
        }
    })
})
//stream
fs.createReadStream('./music.js')
.pipe(
    fs.WriteStream('./music-copy.js')
)