// miniprogram/pages/settime/settime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:'4.25',
    week:"星期四",
    timeline:[{
      issueTime: '6:00',
      issue: "刷牙洗脸",
      duration: "10min"
    },{
      issueTime: '7:00',
      issue: "按摩",
      duration: "10min"
    },{
      issueTime: '8:00',
      issue: "啥时不干",
      duration: "10min"
    },{
      issueTime: '9:00',             
      issue: "帮他人按摩",
      duration: "10min"     
      },{
        issueTime: '12:00',
        issue: "帮他人按摩",
        duration: "10min"
      },{
        issueTime: '16:00',
        issue: "帮他人按摩",
        duration: "10min"
      }, {
        issueTime: '17:00',
        issue: "帮他人按摩",
        duration: "10min"
      }]

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
    // console.log(1);
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