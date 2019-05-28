// miniprogram/pages/history/history.js
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
      url:'http://192.168.1.101:3333/api/history',
      data:{
        "skey":"fd65082ca146700cbee50668bf326d6c3d7986ee5e6d84536cfaebc4c21e6c0ccc3c215161f18bdb5d0ee34bfe92b7436e4620dd78b3005eb57a1a132667c068604bfedb3058ed5934d5577ae2e6f3fb7a517aec57998675e640ca0beb93d8a0",
    },
      header: {
        'content-type': 'application/json' 
      },
      method: 'POST',
      success(res) {
        console.log(res)
        _this.setData({
          cards:res.data.data
        })
        console.log(_this.data.cards)
      },
      fail(err){
        console.log(err)
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