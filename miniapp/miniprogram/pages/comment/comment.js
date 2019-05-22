// miniprogram/pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // days:[[1, 2, 3],[4,5],[7,8,9,10]],
    days:[
      [{
        id:0,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词早背单词早',
        val2:'起背单词啊背单词早',
        isComment:false,
        point:0
      },{
        id:1,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      },{
        id:2,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      }],[{
        id:0,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词早背单词早',
        val2:'起背单词啊背单词早',
        isComment:false,
        point:0
      },{
        id:1,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      },{
        id:2,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      }],[{
        id:0,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词早背单词早',
        val2:'起背单词啊背单词早',
        isComment:false,
        point:0
      },{
        id:1,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      },{
        id:2,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      },{
        id:3,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      },{
        id:4,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      },{
        id:5,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      },{
        id:6,
        timeStart:'6:30',
        timeEnd:'6:45',
        val:'早起背单词',
        val2:'',
        isComment:false,
        point:0
      }]
    ],
    height:'',
    index:-1,
    isShowLeftArrow:true,
    isShowRightArrow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  sliderChange(e){
    let ID = e.target.dataset.id;
    let index = this.data.index
    let card = `days[${index}][${ID}].point`;
    console.log(index , card)
    let isComment = `days[${index}][${ID}].isComment`;
    this.setData({
      [card]:e.detail.value,
      [isComment]:true
    })
    console.log(this.data.days[index][ID])
  },
  toLeft(){
    const length = this.data.days.length;
    let index = this.data.index;

    if(index > 0){
      index -= 1
      if(!this.data.isShowRightArrow){ 
        this.setData({
          isShowRightArrow:true
        })  
      }
    }
    if(index == 0){  
     this.setData({
      isShowLeftArrow:false
     })
    }
    this.setData({
      index:index
    })
  },
  toRight(){
    const length = this.data.days.length;
    let index = this.data.index;
    if(index < length-1){
      index += 1
      if(!this.data.isShowLeftArrow){ 
        this.setData({
         isShowLeftArrow:true
        })  
      }
    }
    if(index == length-1){  
     this.setData({
      isShowRightArrow:false
     })
    }
    this.setData({
      index:index
    })
  },
  change(e){
    const CARD = 260 //一个卡片的高度
    let height = this.data.days[e.detail.current].length*CARD+'rpx';
    this.setData({
      height:height
    })
    this.setData({
      index:e.detail.current
    })
    if(this.data.index == 0){
      this.setData({
       isShowLeftArrow:false
      })
    }else if(this.data.index == this.data.days.length-1){
      this.setData({
        isShowRightArrow:false
      })
    }else {
      this.setData({
        isShowRightArrow:true,
        isShowLeftArrow:true
      })
    }
    console.log(height)
  },
  onLoad: function (options) {
    const CARD = 260 //一个卡片的高度
    let height = this.data.days[0].length*CARD+'px';
    
    this.setData({
      height:height
    })

    this.setData({
      index:this.data.days.length-1
    })
    if(this.data.days.length <= 1){
      this.setData({
        isShowLeftArrow:false
      })
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