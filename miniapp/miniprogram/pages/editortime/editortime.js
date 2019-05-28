// pages/editortime/editortime.js
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
    isNext: Boolean
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp();
    let arrayCard = app.globalData.arrayCard;

    this.setData({
      num: app.globalData.order
    })

    if (app.globalData.newCard != "") {
      arrayCard.push(app.globalData.newCard)
      this.setData({
        cards: arrayCard
      })
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

  },
  inputChange(e) {
    this.setData({
      timeEnd: e.detail.value,
    });
    let ID = this.data.cardID;
    let timeEnd = `cards[${ID}].timeEnd`
    // this.setData({
    //   [timeEnd]: this.getMins(this.data.timeEnd) + 'min'
    // });
    this.setData({
      [timeEnd]: this.data.timeEnd + 'min'
    })
    console.log(this.data.timeEnd)
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
  save() {
    let app = getApp();
    let _this = this;
    app.globalData.allCards.push(app.globalData.arrayCard);
    app.globalData.arrayCard = [];
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
    _this.setData({
      num: app.globalData.order,
    })
    app.globalData.newCard = ""
    console.log(app.globalData.allCards);
    if (this.data.isNext) {
      wx.redirectTo({
        url: './editortime',
        success: (result) => {
        },
        fail: () => { },
        complete: () => { }
      });
    } else {
      console.log(app.globalData.allCards)
      console.log({
        "arr":app.globalData.allCards,
        "period_id":app.globalData.periods[app.globalData.periods.length-1]
      })
      wx.request({
        url: 'http://192.168.1.101:3333/api/createTable',
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
              console.log(app.globalData.allCards)
            },
            fail: () => { },
            complete: () => { }
          });
        },
        fail(err){
          console.log(err)
        }
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
      timeEnd: e.detail.value,
    });
    let ID = this.data.cardID;
    let timeEnd = `cards[${ID}].timeEnd`
    this.setData({
      [timeEnd]: this.getMins(this.data.timeEnd) + 'min'
    });
    console.log(this.data.timeEnd)
  },
  getMins(time) {
    let [hour, minute] = time.split(':');
    let mins = parseInt(hour) * 60 + parseInt(minute);
    return mins
  },
  confirm(e) {
    console.log(e.detail.confirm)
    this.setData({
      isTapX: e.detail.isTapX,
      isDel: false
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