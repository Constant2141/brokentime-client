//app.js
const { api } = require('./config')
App({
  globalData: {
    newCard:'',
    allCards:[],
    order:"一",
    skey:'',
    periods:Array,
    arrayCard:[],
    lastTime:String
  },

  doLogin: function () {

    wx.login({
      success(res) {
        if (res.code) {
          // wx.getUserInfo({
          //   success: function (res) {
          //     let userInfo = res.userInfo;

          //     wx.setStorageSync('userInfo', userInfo);
          //     console.log('储存userInfo成功')
          //   },
          //   fail: function (res) {
          //     wx.navigateTo({
          //       url: '../login/login',
          //     })
          //   }
          // })
          wx.request({
            url: api.login,
            data: {
              code: res.code
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              let app = getApp()
              console.log(res.data)
              wx.setStorageSync("skey", res.data.skey)
              wx.setStorageSync("periods", res.data.data.periods)
              getApp().globalData.skey = res.data.skey;
              app.globalData.periods = res.data.data.periods;
              console.log(app.globalData.periods)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },


  onLaunch: function () {
    
    var that = this;

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }


    let skey = wx.getStorageSync('skey')  //从缓存中得到skey，如果没有则重新登录
    // console.log('拿到缓存'+skey);

    if (skey) {
      wx.checkSession({
        success: function () {
          console.log('登录中')
          getApp().globalData.skey = skey;
        },
        fail: function () {
          wx.showModal({
            title: '提示',
            content: '登录已过期，请重新登录',
            success: function () {
              that.doLogin()
            }
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '尚未登录，点击授权登录',
        success: function () {
          that.doLogin()
        }
      })
    }
  }
})
