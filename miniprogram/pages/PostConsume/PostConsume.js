Page({

  /**
   * 页面的初始数据
   */
  data: {
    desty:'',
    start:'',
    starttime:'',
  },
    //获得出发地和目的地
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
  getstarttime: function (e) {
    var starttime = e.detail.value;
    this.setData({
      starttime: starttime
    });
  },

  //添加数据到数据库
  res: function (e) {
    const db = wx.cloud.database()
    db.collection('user').add({
      data: {
        start: e.detail.value.start,
        desty: e.detail.value.desty,
        starttime: e.detail.value.starttime,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          start: e.detail.value.start,
          desty: e.detail.value.desty,
          starttime: e.detail.value.starttime,
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var desty = wx.getStorageSync('desty');
    var start = wx.getStorageSync('start');
    this.setData({ desty: desty });
    this.setData({ start: start });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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