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
    value:[0],
    select:1,
    isNew:true,
    timeList:[
      // {
      //   time:'20:26',
      //   msg:'背单词'
      // },
      // {
      //   time:'20:26',
      //   msg:'抄单词'
      // },
      // {
      //   time:'20:26',
      //   msg:'创造单词'
      // }
    ],
    msg:"",
    isHidden:false,
  },
  showBKtime(){
    wx.navigateTo({
      url:'../history/history'
    })
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
    if(e.changedTouches[0]){
      this.setData({
        startX :  e.changedTouches[0].clientX,
        startY : e.changedTouches[0].clientY
      })
    }
  },
  touchEnd(e) {
    this.setData({
      "endX": e.changedTouches[0].clientX,
      "endY": e.changedTouches[0].clientY
    })
  },
  bindChange(e){
    let ID = e.detail.value[0]
    let msg = this.data.timeList[ID].affair
    this.setData({
      value: e.detail.value,
      select:e.detail.value[0],
      isHidden:true,
    });
    setTimeout(()=>{
      this.setData({
        msg:msg,
        isHidden:false,
      })
    },500)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {api} =require('../../config')
    let app = getApp();
    const _this = this;
    console.log(app.globalData.skey);
    console.log(api.getTable)
  
    wx.request({
      url: api.getTable,
      data: {
        "skey":wx.getStorageSync('skey'),
        "period_id":wx.getStorageSync('periods')[wx.getStorageSync('periods').length-1]
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: (result)=>{
        
        this.setData({
          timeList:result.data.data.btables,
          msg:result.data.data.btables[0].affair
        })
        let [month,day] = result.data.data.endDay.split('.')
        let nowMon = new Date().getMonth()+1
        let nowDay = new Date().getDate()
        if(nowMon >= month && nowDay > day){
          this.setData({
            isNew:true
          })
        }else{
          this.setData({
            isNew:false
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  toBuild(){
    wx.redirectTo({
      url:'../../pages/prompt/prompt'
    })
  },
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