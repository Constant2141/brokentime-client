// miniprogram/pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeID:0,
    cards:[
      {
        dayStart:"4.25",
        point:50,
        dayEnd:"4.28"
      },
      {
        dayStart:"4.22",
        point:30,
        dayEnd:"4.23"
      },
      {
        dayStart:"5.25",
        point:10,
        dayEnd:"5.28"
      }
    ]
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