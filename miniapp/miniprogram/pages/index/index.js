const app = getApp();
const { api } = require('../../config');
Page({
  data:{
    a:20,
    b:false,
    arr:[1,2,13],
    selectedIndex:0,
  },
  fn(){
    wx.getUserInfo({
      success(res){
        console.log(res);
        alert("success")
      },
      fail(res){
        console.log("失败")
      }
    })
    // wx.showLoading({
    //   title: 'waiting',
    // })
    console.log(this.a);
  },
  selectChange(e){
    console.log(e);
    this.setData({
        selectedIndex:e.detail.value
    })
  },
  //小程序启动后执行
  abbb(){
    
  },
  onLaunch:function(){
    this.fn();
  },
  //页面渲染后执行
  onLoad:function(){
    // console.log(app,this.a)
    setTimeout(()=>{
      wx.redirectTo({
        url:'../../pages/homepage/homepage'
      })
    },4000)
  },
  a:12,
  user:{
    name:"greed"
  }
})

