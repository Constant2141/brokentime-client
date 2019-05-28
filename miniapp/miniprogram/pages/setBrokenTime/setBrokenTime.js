// miniprogram/pages/setBrokenTime/setBrokenTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // day:"4.25",
    // week:'星期四',
    isfinish:false,
    isback:false,
    issue:[{
      day:'4.25',
      week:'星期四',
      bigDeal:[{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      }],
      brokenTime:[{
        id:0,
        timecard:'6.00-6.45',
        brokenIssue:''
      },{
        id:1,
        timecard:'6.00-6.45',
        brokenIssue:''
      },{
        id:2,
        timecard:'6.00-6.45',
        brokenIssue:''
      },{
        id:3,
        timecard:'6.00-6.45',
        brokenIssue:''
      }]
    },
    {
      day:'4.26',
      week:'星期五',
      bigDeal:[{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      },{
        timeLabel:"早晨",
        time:'6:00',
        issue:'刷牙洗脸 早起背单词',
        lasttime:'10min'
      }],
      brokenTime:[{
        id:0,
        timecard:'6.00-6.45',
        brokenIssue:''
      },{
        id:1,
        timecard:'6.00-6.45',
        brokenIssue:''
      },{
        id:2,
        timecard:'6.00-6.45',
        brokenIssue:''
      },{
        id:3,
        timecard:'6.00-6.45',
        brokenIssue:''
      }]
    }]

  },
  save(e){
    this.setData({
      isfinish:true
    })
  },
  bindKeyInput(e){
    // console.log(e)
    // let id = parseInt(e.currentTarget.id);
    // console.log(this.data.bigDeal[id].brokenIssue);
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