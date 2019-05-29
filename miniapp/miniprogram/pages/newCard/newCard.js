// pages/editortime/editortime.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    timeStart: '添加时间',
    lastTime: '',
    affair: '',
    isClickDot: false,
    isNull: Boolean
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickPicker() {
    this.setData({
      lastTime: '00:00'
    })
  },
  clickDot() {
    this.setData({
      isClickDot: !this.data.isClickDot,
    })
  },
  bindTimeStartChange(e) {
    this.setData({
      timeStart: e.detail.value
    });
  },
  bindTimeEndChange(e) {
    this.setData({
      lastTime: this.getMins(e.detail.value)
    });
  },
  getMins(time) {
    let [hour, minute] = time.split(':');
    let mins = parseInt(hour) * 60 + parseInt(minute);
    return mins
  },
  bindTextAreaBlur(e) {
    this.setData({
      affair: e.detail.value
    })
    console.log(e.detail.value)
  },
  inputChange(e) {
    this.setData({
      lastTime: e.detail.value,
    });
    // this.setData({
    //   [timeEnd]: this.getMins(this.data.timeEnd) + 'min'
    // });
    console.log(this.data.lastTime)
  },
  confirm(e){
    console.log(e)
    this.setData({
      isNull:false
    })
  },
  submitCard() {
    const _this = this;

    if (this.data.timeStart == "" || this.data.lastTime == "" || this.data.affair == "") {
      this.setData({
        isNull : true
      })
    } else {
      function promise() {
        return new Promise(function (resolve, reject) {
          // setTimeout(() => {
          const newCard = {
            timeStart: _this.data.timeStart,
            lastTime: _this.data.lastTime,
            affair: _this.data.affair,
          }
          return resolve(newCard);
          // }, 50)
        });
      }
      promise().then(newCard => {
        let app = getApp();
        app.globalData.newCard = newCard;
        console.log(app.globalData.newCard)
        wx.redirectTo({
          url: '/pages/editortime/editortime'
        })
      });
    }

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