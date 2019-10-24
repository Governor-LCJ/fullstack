const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const width = 200, heigth = 50;

ctx.width = width + "px";
ctx.heigth = heigth + "px";

//在canvas上画线
// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(100,200);
// ctx.strokeStyle = 'rgb(0,0,0)';
// ctx.stroke();

drawLine();

function drawLine() {
    //在canvas上画线
    for(let i = 0; i < 6; i++) {
        let beginX = Math.random() * width;
        let beginY = Math.random() * heigth;
        let endX = Math.random() * width;
        let endY = Math.random() * heigth;
        //随机线段的起始位置
        ctx.beginPath();
        ctx.moveTo(beginX,beginY);
        ctx.lineTo(endX,endY);
        ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;//随机颜色
        ctx.stroke();
    }
}

drawText()
function drawText() {
    //生成字
    let result = []
    var sourceText = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z']
    for(let i = 0; i < 4; i++) {
        const idx = Math.floor(Math.random() * sourceText.length);//随机取出字母
        result.push(sourceText[idx]);
        //添加选中字母
        sourceText.splice(idx,1);
        //删除选中字母，保证字母不重复

    }
    for(let i = 0; i < result.length; i++) {
        //画上字母
        ctx.font = '40px Helvetica';
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;//随机字母颜色
        ctx.textBaseLine = 'middle';
        let preWidth = width / 4 - 10;
        //将宽度分成4份  为了保证字母全部进入canvas，-10px
        ctx.fillText(result[i],Math.random() * preWidth + i * preWidth,
        heigth / 2);
        //将字母平均分到canvas上
    }
}

canvas.addEventListener('click' ,function() {
    ctx.clearRect(0 ,0, width, heigth);
    drawLine()
    drawText()
})