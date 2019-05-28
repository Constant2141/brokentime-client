// pages/editortime/editortime.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    timeStart: '添加时间',
    timeEnd: '',
    val: '',
    isClickDot: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickPicker(){
    this.setData({
      timeEnd:'00:00'
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
      timeEnd: this.getMins(e.detail.value) + "min"
    });
  },
  getMins(time) {
    let [hour, minute] = time.split(':');
    let mins = parseInt(hour) * 60 + parseInt(minute);
    return mins
  },
  bindTextAreaBlur(e) {
    this.setData({
      val: e.detail.value
    })
    console.log(e.detail.value)
  },
  inputChange(e){
    this.setData({
      timeEnd:e.detail.value +'min',
    });
      // this.setData({
      //   [timeEnd]: this.getMins(this.data.timeEnd) + 'min'
      // });
    console.log(this.data.timeEnd)
  },
  submitCard() {
    const _this =this;
    function promise() {
      return new Promise(function (resolve, reject) {
        // setTimeout(() => {
          const newCard = {
            timeStart: _this.data.timeStart,
            timeEnd: _this.data.timeEnd,
            val: _this.data.val,
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
        url:'/pages/editortime/editortime'
      })
    });
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