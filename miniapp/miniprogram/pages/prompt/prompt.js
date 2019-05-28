// miniprogram/pages/prompt/prompt.js
var app = getApp();
const { api } = require("../../config");
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
      wx.request({
        url: api.createPeriod,
        data:{
          'skey':wx.getStorageSync('skey'),
          'lastTime':this.data.day
        },
        method:"POST",
        success:(res)=>{
          console.log(res)
          if(res.data.code == 200){
            wx.redirectTo({
              url:'../editortime/editortime'
            })
          }
        }
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