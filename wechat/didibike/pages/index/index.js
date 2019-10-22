// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 28.734118,//维度
    longitude: 115.823207,//经度
    scale:18,
    markers:[],
  },

  toUser() {

  },

  toMsg() {

  },

  toReset() {
    //回到最初的定位
    console.log('reset');
    this.mapCtx.moveToLocation();
    this.setData({
      scale: 18
    })
  },
  tocreateMarkers(longitude, latitude) {
    let markers = [
      {
        "id":1,
        "iconPath":"/images/map-bicycle.png",
        "longitude": longitude,
        "latitude": latitude,
        "width":52.5,
        "height":30,
        "callout":{}
      }
    ]
    this.setData({
      markers
    });
  },

  toVisit(e) {
    console.log(e);
  },

  toScan() {
    return wx.scanCode({
      success:(res) => {
        // console.log(res);
        wx.showModal({
          title: 'scan',
          content: JSON.stringify(res),
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中',
    });
    //手机的GPS
    wx.getLocation({
      type:'gcj02',//将经纬度初始化，归零
        success: (res) => {
        // console.log(longitude, latitude);
        let { longitude,latitude } = res;
        //将当前的经纬度传给数据源
        this.tocreateMarkers(longitude, latitude)
        // console.log(longitude, latitude);
        this.setData({
          longitude,
          latitude
        },() => {
          wx.hideLoading();
        })

      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //地图上下文环境
    this.mapCtx = wx.createMapContext('myMap');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})