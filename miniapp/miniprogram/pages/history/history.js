// miniprogram/pages/history/history.js
let app = getApp();
const {api} = require('../../config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeID:0,
    cards:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  currentChange(e){
    this.setData({
      activeID:e.detail.current
    })
    console.log(e.detail.current)
  },
  clickCard(e){
    console.log(e)
    this.setData({
      activeID:e.target.dataset.id
    })
  },
  onLoad: function (options) {
    let _this =this;
    wx.request({
      url:api.history,
      data:{
        "skey":wx.getStorageSync('skey'),
    },
      header: {
        'content-type': 'application/json' 
      },
      method: 'POST',
      success(res) {
        console.log(res)
        _this.setData({
          cards:res.data.data.reverse()
        })
        console.log(_this.data.cards)
      },
      fail(err){
        console.log(err)
      }
    })
  },
  interCard(e){
    wx.setStorageSync('period_id',this.data.cards[e.target.dataset.id]._id)
    wx.redirectTo({
      url:'../../pages/showBrokenTime/showBrokenTime'
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