var parent = document.getElementById('content-items')
// console.log(parent)
var send = document.getElementById('send')
send.addEventListener('click', function () {
    var li = document.createElement('li')
    li.setAttribute('class', 'content-item')
    // console.log(li)

    var divPic = document.createElement('div')
    divPic.setAttribute('class', 'pic')
    li.appendChild(divPic)
    var img = document.createElement('ing')
    img.setAttribute('src', 'http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg')
    divPic.appendChild(img)
    
})

