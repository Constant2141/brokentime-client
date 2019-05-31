// pages/editortime/editortime.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cards: Array,
    cardID: 0,
    range: [],
    isDel: false,
    isTapX: false,
    num: "一",
    isNext: Boolean,
    isOnlyOne:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arrayCard = app.globalData.arrayCard;

    this.setData({
      num: app.globalData.order
    })

    if (app.globalData.newCard != "") {
      arrayCard.push(app.globalData.newCard)
      this.setData({
        cards: arrayCard
      })
      app.globalData.newCard='';
    } else {
      console.log(app.globalData.newCard)
    }
    /***按时间分配id ***/
    if (arrayCard) {

      arrayCard.sort((a, b) => {
        return a.timeStart >= b.timeStart ? true : false
      })

      arrayCard.forEach(function (val, idx) {
        val.id = idx
      })
      console.log(arrayCard)

      this.setData({
        cards: arrayCard
      })
    }
    
    console.log(app.globalData.arrayCard)

  },
  inputChange(e) {
    this.setData({
      lastTime: e.detail.value,
    });
    let ID = this.data.cardID;
    let lastTime = `cards[${ID}].lastTime`
    // this.setData({
    //   [timeEnd]: this.getMins(this.data.timeEnd) + 'min'
    // });
    this.setData({
      [lastTime]: this.data.lastTime
    })
    console.log(this.data.lastTime)
  },
  changeIsTapX(e) {
    console.log(e.detail)
  },
  delCard(e) {
    this.clickCard(e);
    console.log(this.data.isDel);

    this.setData({
      isDel: true,
      isTapX: true
    })

  },
  confirmDelCard() {
    let delCards = this.data.cards.filter(card => card.id != this.data.cardID);
    this.setData({
      cards: delCards,
    })
    getApp().globalData.arrayCard = delCards;

  },
  bindTextAreaBlur(e) {

    this.setData({
      cardID: e.currentTarget.dataset.id
    })
    let ID = this.data.cardID;
    let affair = `cards[${ID}].val`
    this.setData({
      [affair]: e.detail.value
    })
  },
  toEditor(){
    wx.redirectTo({
      url: '../../pages/newCard/newCard',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  save() {
    let _this = this;
    const {api} = require('../../config')
    console.log('app.globalData.arrayCard: '+app.globalData.arrayCard);
    console.log('app.globalData.allCards: '+app.globalData.allCards);

    if( app.globalData.arrayCard!=[]
        && app.globalData.arrayCard.length > 1){

          app.globalData.allCards.push(app.globalData.arrayCard);
          app.globalData.arrayCard = [];
          //给卡片按timeStatr排序后加id
          for(let i = 0 ; i< app.globalData.allCards.length-1 ; i++){
            app.globalData.allCards[i].sort((a, b) => {
              return a.timeStart >= b.timeStart ? true : false
            })
            app.globalData.allCards[i].forEach(function (val, idx) {
              val.id = idx
            })
            console.log("排序加id后的app.globalData.allCards： "+app.globalData.allCards)
          }
          //修改天数显示
          switch (app.globalData.order) {
            case `${app.globalData.lastTime}`:
              this.setData({
                isNext: false
              }); console.log(this.data.isNext); break;
            case "一": app.globalData.order = "二"; break;
            case "二": app.globalData.order = "三"; break;
            case "三": app.globalData.order = "四"; break;
            case "四": app.globalData.order = "五"; break;
            case "五": app.globalData.order = "六"; break;
            case "六": app.globalData.order = "七"; break;
            default: break;
          }
          this.setData({
            num: app.globalData.order,
          })

          if (this.data.isNext) {
            wx.redirectTo({
              url: './editortime',
              success: (result) => {
                
              },
              fail: () => { },
              complete: () => { }
            })
          }else{
              wx.request({
                url: api.createTable,
                data: {
                  "skey": app.globalData.skey,
                  "arr":app.globalData.allCards,
                  "period_id":app.globalData.periods[app.globalData.periods.length-1]
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'POST',
                success(res) {
                  console.log(res)
                  wx.redirectTo({
                    url: '../../pages/settime/settime',
                    success: (result) => {
                      app.globalData.allCards=[];
                    },
                  });
                },
                fail(err){
                  console.log(err)
                }
              })
              
          }
    }else{
      //弹出警告 不能只有一个日程
      this.setData({
        isOnlyOne:true
      })
    }

    
  },
  clickCard(e) {
    this.setData({
      cardID: e.currentTarget.dataset.id
    })
    console.log(this.data.cardID)
  },
  bindTimeStartChange(e) {
    let ID = this.data.cardID;
    let timeStart = `cards[${ID}].timeStart`
    this.setData({
      [timeStart]: e.detail.value
    });
    console.log(this.data.cards[ID].timeStart)
  },
  bindTimeEndChange(e) {
    this.setData({
      lastTime: e.detail.value,
    });
    let ID = this.data.cardID;
    let lastTime = `cards[${ID}].lastTime`
    this.setData({
      [lastTime]: this.getMins(this.data.lastTime)
    });
    console.log(this.data.lastTime)
  },
  getMins(time) {
    let [hour, minute] = time.split(':');
    let mins = parseInt(hour) * 60 + parseInt(minute);
    return mins
  },
  confirmOnlyOne(e){
    console.log(e.detail.isOnlyOne)
    if(!e.detail.isOnlyOne){
      this.setData({
        isOnlyOne:false
      })
    }
  },
  confirm(e) {
    this.setData({
      isTapX: e.detail.isTapX,
      isDel: false,
    })
    if (e.detail.confirm) {
      this.confirmDelCard()
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