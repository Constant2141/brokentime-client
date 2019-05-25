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
        timeStart: "11:00",
        timeEnd: '添加持续时间',
        val:""
      },
      {
        timeStart: "12:00",
        timeEnd: '添加持续时间',
        val:""
      },
    ],
    cardID:0,
    range:Array,
    isDel:false,
    isTapX:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp();
    let arrayCard = this.data.cards;
    let range=[];
    for(let i = 1 ; i <= 1440 ; i++){
      if(i!=1)
      range.push(i+'mins');
      else
      range.push(i+'min')
    }
    this.setData({
      range:range
    })
    console.log(range)
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
  changeIsTapX(e){
    console.log(e.detail)
  },
  delCard(e){
    this.clickCard(e);
    console.log(this.data.isDel);
    
    this.setData({
      isDel:true,
      isTapX:true
    })
    
  },
  confirmDelCard(){

    let delCards = this.data.cards.filter(card => card.id != this.data.cardID);
    this.setData({      
      cards: delCards,
    })
    
  },
  clickCard(e){
    this.setData({
      cardID: e.currentTarget.dataset.id
    })
  },
  bindTimeStartChange(e){
    let ID = this.data.cardID;
    let timeStart =`cards[${ID}].timeStart`
      this.setData({
        [timeStart]: e.detail.value
      });
      console.log(this.data.cards[ID].timeStart)
  },
  bindTimeEndChange(e) {
    this.setData({
      timeEnd:e.detail.value,
    });
      let ID = this.data.cardID;
      let timeEnd =`cards[${ID}].timeEnd`
      this.setData({
        [timeEnd]: this.getMins(this.data.timeEnd) + 'min'
      });
    console.log(this.data.timeEnd)
  },
  getMins(time){
    let [hour, minute] = time.split(':');
    let mins = parseInt(hour) * 60 + parseInt(minute);
    return mins
  },
  confirm(e){
    console.log(e.detail.confirm)
    this.setData({
      isTapX:e.detail.isTapX,
      isDel:false
    })
    
    if(e.detail.confirm){
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