// miniprogram/pages/NearbyConsume/NearbyConsume.js
const db = wx.cloud.database({});
const cont = db.collection('user');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consume_list:[],
  },
//查询数据
 
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    db.collection('user').get({
      success: res => {
        console.log(res.data);
        console.log(this);
       this.setData({
         consume_list:res.data,
       })
      }
    })
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