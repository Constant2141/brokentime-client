// pages/editortime/editortime.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cards:[
      {
        timeStart: "06:00",
        timeEnd: '添加持续时间',
        val:""
      },
      {
        timeStart: "06:45",
        timeEnd: '添加持续时间',
        val:""
      },
      {
        timeStart: "10:00",
        timeEnd: '添加持续时间',
        val:""
      },
      {
        timeStart: "09:00",
        timeEnd: '添加持续时间',
        val:""
      },
      {
        timeStart: "12:00",
        timeEnd: '添加持续时间',
        val:""
      },
      {
        timeStart: "11:00",
        timeEnd: '添加持续时间',
        val:""
      },
    ],
    cardID:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp();
    let arrayCard = this.data.cards;
    if(app.globalData.newCard!=""){
      arrayCard.push(app.globalData.newCard)
      this.setData({
        cards:arrayCard
      })
    }else{
      console.log(app.globalData.newCard)
    }

    /***按时间分配id ***/
    let cards = this.data.cards;
    cards.sort((a,b)=>{
      return a.timeStart>=b.timeStart? true:false
    })
    cards.forEach(function(val,idx){
      val.id = idx
    })
    console.log(cards)

    this.setData({
      cards:cards
    })
  },
  delCard(e){
    this.setData({
      cardID: e.currentTarget.dataset.id
    })
    let delCards = this.data.cards.filter(card => card.id != this.data.cardID);
    
    this.setData({
      cards: delCards
    })
  },
  clickDot(){
    wx.redirectTo({
      url: '../../pages/newCard/newCard',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  clickCard(e){
    this.setData({
      cardID: e.currentTarget.dataset.id
    })
  },
  submitCard(e){
    let ID = e.currentTarget.dataset.id;
    let val = `cards[${ID}].val`;
    this.setData({
      [val]: e.detail.value
    });
    console.log(this.data.val)
  },
  bindTimeStartChange(e){
    let ID = this.data.cardID;
    let timeStart =`cards[${ID}].timeStart`

    setTimeout(()=>{
      this.setData({
        [timeStart]: e.detail.value
      });
      console.log(this.data.cards[ID].timeStart)
    },0)
  },
  bindTimeEndChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeEnd:e.detail.value,
    });
    setTimeout(() => {
      let ID = this.data.cardID;
      let timeEnd =`cards[${ID}].timeEnd`
      console.log(timeEnd)
      this.setData({
      //  msg: `${this.getMins(this.data.time)} + min`,
        [timeEnd]: this.getMins(this.data.timeEnd) + 'min'
        // msg: this.getMins(this.data.time) + 'min'
      });

      console.log(this.data.cards[ID].msg)
    },0)
    console.log(this.data.timeEnd,this.data.msg)
  },
  setDataValue(name,value){
    this.setData({
      name: value
    });
    console.log(this.data.timeEnd)
  },
  getMins(time){
    let [hour, minute] = time.split(':');
    let mins = parseInt(hour) * 60 + parseInt(minute);
    return mins
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