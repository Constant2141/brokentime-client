// miniprogram/pages/setBrokenTime/setBrokenTime.js
const { api } = require("../../config");
const app = getApp();
var data ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // day:"4.25",
    // week:'星期四',
    isfinish:false,
    isback:false,
    bigDeal:[],
    brokenDeal:[],
    sendData:[],

  },
  save(e){
    this.setData({
      isfinish:true
    })
    console.log(wx.getStorageSync('skey'))
    console.log(app.globalData.periods[app.globalData.periods.length-1])
    console.log(this.data.sendData)
    wx.request({
      url:api.createBTable,
      data:{
        "period_id":app.globalData.periods[app.globalData.periods.length-1],
        "skey":wx.getStorageSync('skey'),
        "arr":this.data.sendData
      },
      method:"POST",
      success:(res)=>{
        console.log(res)
      }
    })
  },
  getTable(){
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
      },
      fail:(err)=>{
        console.log(err);
        
      }
    })
    wx.request({
      url: api.calc,
      data:{
        "period_id":app.globalData.periods[app.globalData.periods.length-1],
        "skey":wx.getStorageSync('skey'),
      },
      method:"POST",
      success:(res)=>{
        console.log(res);
        this.setData({
          brokenDeal:res.data.data
        })
        this.split(res.data.data)
        // this.handleData(res.data.data)
      },
      fail:(err)=>{
        console.log(err);
        
      }
    })
  },
  bind(){
    this.getTable();


  },
  split(e){
    let arr = [];
    for(let i =0;i < e.length;i++){
      arr[i] = [];
      for(let j = 0;j < e[i].length;j++){
        let time = e[i][j].split("-");
        let data = {
          "timeStart":time[0],
          "timeEnd":time[1],
          "affair":''
        }
        arr[i].push(data);
      }
    }
    this.setData({
      sendData:arr
    })
    console.log(arr);
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
  bindblur(e){
    // console.log(e)
    let index = e.target.id.split(",");
    let val =   `sendData[${index[0]}][${index[1]}].affair`;
    this.setData({
      [val]:e.detail.value
    })
    console.log(this.data.sendData);
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
    this.getTable();
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