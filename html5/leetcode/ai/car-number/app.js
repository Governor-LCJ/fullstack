var ApiImageClassifyClient = require
('baidu-aip-sdk').imageClassify;//图片分类
var fs = require('fs')

var APP_ID = "17798914";
var API_KEY = "feRXOMjnaZBIY6ABsZcEvi8j";
var SECRET_KEY = "47BmEUeY1yZHKrGCMCZUXo83HzTdku6G";

var image = fs.readFileSync('../car/car.jpg').toString("base64");//同步(readFlieSync)

var client = new ApiImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

client.carDetect(image)
.then(function(result) {
  console.log(result);
})
.catch(function(err) {
  console.log(err)
})
// console.log(image)
