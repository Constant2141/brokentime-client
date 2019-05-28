// miniprogram/pages/prompt/prompt.js
var app = getApp();
const query = wx.createSelectorQuery();
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: getApp().globalData.userInfo ,
    day:1,//判断用户选择的天数
  },


//用户选择天数
  choose:function(e){
    // console.log(e);
    this.setData({
      day:e.target.id
    })
  },
  
//选择完周期点击开始按钮
  start:function(e){
      console.log(this.data.day)
      wx.setStorageSync('lastTime', this.data.day)
      
  },

  //点击问号跳转到帮助提示界面
  tips:function(){
    wx.navigateTo({
      url: '../tips/tips',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // let skey = wx.getStorageSync('skey')  //从缓存中得到skey，如果没有则重新登录
    // console.log('拿到缓存' + skey);
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