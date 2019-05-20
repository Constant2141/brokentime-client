// pages/homepage/homepage.js
import touch from "../../utils/getTouchData"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    change:false,
    startX:0,
    startY:0,
    endX:0,
    endY:0,
    value:[1],
    select:1
  },
  menuClick(e){
    if (this.data.change) {
      this.setData({
        change: false
      });
    } else {
      this.setData({
        change: true
      });
    }
  },
  touchMove(){
    let turn = touch(this.data.startX, this.data.startY, this.data.endX, this.data.endY);
    if (turn == "right" && this.data.change) {
      this.menuClick();
    }else if(turn == "left" && !this.data.change){
      this.menuClick();
    }
  },
  touchStart(e){
    this.setData({
      startX :  e.changedTouches[0].clientX,
      startY : e.changedTouches[0].clientY
    })
  },
  touchEnd(e) {
    this.setData({
      "endX": e.changedTouches[0].clientX,
      "endY": e.changedTouches[0].clientY
    })
  },
  bindChange(e){
    this.setData({
      value: e.detail.value,
      select:e.detail.value[0]
    });
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