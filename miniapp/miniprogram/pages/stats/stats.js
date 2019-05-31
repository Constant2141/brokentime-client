// miniprogram/pages/stats/stats.js
const {
  api
} = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: Math.floor(Math.random() * 100)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let app = getApp()
    wx.request({
      url: api.stats,
      data: {
        "skey": app.globalData.skey,
        "period_id": app.globalData.periods[app.globalData.periods.length - 1]
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success(res) {
        if (res.data.code == 200) {
          this.setData({
            total: res.data.total
          })
        }
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})