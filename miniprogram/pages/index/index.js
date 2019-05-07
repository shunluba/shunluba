Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    start:'',
    desty:'',
  },
  getstart: function (e) {
    var start = e.detail.value;
    this.setData({
      start: start
    });
  },
  getdesty: function (e) {
    var desty = e.detail.value;
    this.setData({
      desty: desty
    });
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
    //跳转到发布拼伞页面
  postCon: function (e) {
    wx.setStorageSync('start', this.data.start);
    wx.setStorageSync('desty', this.data.desty);
    wx.navigateTo({
      url: '../PostConsume/PostConsume'
    })
  },
})
