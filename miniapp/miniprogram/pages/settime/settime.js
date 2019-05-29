// miniprogram/pages/settime/settime.js
const { api } = require("../../config");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isfinish:false,
    bigDeal:[{
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
    {
      day:'4.26',
      week:"星期五",
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
    }],
    

  },
  bind(){
    console.log(app.globalData.periods[app.globalData.periods.length-1]);
    
    wx.request({
      url: api.getTable,
      data:{
        "period_id":app.globalData.periods[app.globalData.periods.length-1],
        "skey":wx.getStorageSync('skey'),
      },
      method:"POST",
      success:(res)=>{
        console.log(res);
        this.handleData(res.data.data)
      }
    })
  },

  handleData(e){
    let issue = [];
    switch(e.lastTime){
      case "1": issue[0] = [];
              break;
      case "3": for(let i =0;i<3;i++){
                issue[i] = [];
              }
              break;  
      case "3": for(let i =0;i<7;i++){
                issue[i] = [];
              }
              break      
    }
    for(let i = 0;i < e.tables.length;i++){
      switch(e.tables[i].order){
        case "1":issue[0].push(e.tables[i]);
                  break;
        case "2":issue[1].push(e.tables[i]);
                  break;  
        case "3":issue[2].push(e.tables[i]);
                  break;     
        case "4":issue[3].push(e.tables[i]);
                  break;
        case "5":issue[4].push(e.tables[i]);
                  break;  
        case "6":issue[5].push(e.tables[i]);
                  break;
        case "7":issue[6].push(e.tables[i]);
                  break;               
      }
    }
    console.log(issue)
    this.setData({
      bigDeal:issue
    })
  },
  isfinish(){
    this.setData({
      isfinish:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(wx.getStorageSync('periods'))
    
    console.log(app.globalData.periods)
    
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