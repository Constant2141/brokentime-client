//app.js
const {api}  = require('./config')
App({
  globalData: {
  },

  doLogin: function () {
    // var skey = wx.getStorageSync('skey') || {};
    // var userInfo = wx.getStorageSync('userInfo') || {};
    wx.login({
      success(res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              let userInfo = res.userInfo;

              wx.setStorageSync('userInfo', userInfo);//存储userInfo
              console.log('储存userInfo成功')
            },
            fail: function (res) {
              wx.navigateTo({
                url: '../login/login',
              })
            }
          })

          
          
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
              console.log(res.data.msg)
              wx.setStorageSync("skey", res.data.skey)
              console.log('储存skey成功')
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


    let skey = wx.getStorageSync('skey')
    if (skey) {
      wx.checkSession({
        success: function () {
          console.log('登录中')
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
        content: '尚未登录，请先登录',
        success: function () {
          that.doLogin()
        }
      })
    }
  }
})
