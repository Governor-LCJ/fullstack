const width = 200, heigth = 40;
//抽象

class Gcode {
    constructor(el) {
        this.$el = document.getElementById(el);
        this.ctx = this.$el.getContext('2d');
        this.$el.width = width;
        this.$el.heigth = heigth;        
        this.drawLine();
        this.drawText();
        let that = this;
        this.$el.addEventListener('click', function() {
            that.ctx.clearRect(0 ,0, width, heigth);
            that.drawLine()
            that.drawText()
        })
    }

    drawText() {
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
            this.ctx.font = '40px Helvetica';
            this.ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;//随机字母颜色
            this.ctx.textBaseLine = 'middle';
            let preWidth = width / 4 - 10;
            //将宽度分成4份  为了保证字母全部进入canvas，-10px
            this.ctx.fillText(result[i],Math.random() * preWidth + i * preWidth,
            heigth / 2);
            //将字母平均分到canvas上
        }
    }
    
    drawLine() {
        //在canvas上画线
        for(let i = 0; i < 6; i++) {
            let beginX = Math.random() * width;
            let beginY = Math.random() * heigth;
            let endX = Math.random() * width;
            let endY = Math.random() * heigth;
            //随机线段的起始位置
            this.ctx.beginPath();
            this.ctx.moveTo(beginX,beginY);
            this.ctx.lineTo(endX,endY);
            this.ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;//随机颜色
            this.ctx.stroke();
        }
    }
}




// 实例
let obj = new Gcode('screen');
let obj1 = new Gcode('screen1');
let obj2 = new Gcode('screen2');