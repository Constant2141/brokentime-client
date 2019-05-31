// miniprogram/pages/comment/comment.js
const app = getApp();

const {api} =require('../../config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // days:[[1, 2, 3],[4,5],[7,8,9,10]],
    days:[
      // [{
      //   id:0,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词早背单词早',
      //   val2:'起背单词啊背单词早',
      //   isComment:false,
      //   point:0
      // },{
      //   id:1,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:2,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // }],[{
      //   id:0,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词早背单词早',
      //   val2:'起背单词啊背单词早',
      //   isComment:false,
      //   point:0
      // },{
      //   id:1,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:2,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:3,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // }],[{
      //   id:0,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词早背单词早',
      //   val2:'起背单词啊背单词早',
      //   isComment:false,
      //   point:0
      // },{
      //   id:1,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:2,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:3,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:4,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:5,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // },{
      //   id:6,
      //   timeStart:'6:30',
      //   timeEnd:'6:45',
      //   val:'早起背单词',
      //   val2:'',
      //   isComment:false,
      //   point:0
      // }]
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
    let card = `days[${index}][${ID}].score`;
    console.log(index , card)
    let isFinish = `days[${index}][${ID}].isFinish`;
    this.setData({
      [card]:e.detail.value,
      [isFinish]:true
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
    let height;
    if(this.data.days[e.detail.current].length>4){
       height = this.data.days[e.detail.current].length*CARD;
    }else{
      height = 4*CARD
    }
    if(this.data.days[e.detail.current].length >= 5){
      height+=50
    }
    this.setData({
      height:height+'rpx'
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
    const _this = this;
    console.log(api.getTable)
    wx.request({
      url: api.getTable,
      data: {
        "skey":wx.getStorageSync('skey'),
        "period_id":app.globalData.periods[app.globalData.periods.length-1]
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: (result)=>{
        console.log(result.data.data.btables)
        let temp = [];
        let arr = [];
        let res =[];
        let i = 0;
        for(const length = result.data.data.btables.length; i < length-1 ; i++ ){
          
          temp.push(result.data.data.btables[i])

          if(result.data.data.btables[i].order != result.data.data.btables[i+1].order){
            arr.push(temp);
            temp=[]
          }
        }
        temp.push(result.data.data.btables[i])
        arr.push(temp)
        console.log(arr);
        console.log(arr[arr.length-1][0].order)
        for(let i = 0 ,len = parseInt(arr[arr.length-1][0].order) ; i < len ; i++){
          res[i]=[];
        }
        arr.forEach((val,idx)=>{
          res[parseInt(val[0].order)-1] = val
        })
        console.log(res)
        this.setData({
          days:res,
        })
        const CARD = 260 //一个卡片的高度
        let height ;
        
        if(this.data.days[this.data.days.length-1].length>4){
          height = this.data.days[this.data.days.length-1].length*CARD;
        }else{
          height = 4*CARD
        }
        if(this.data.days[this.data.days.length-1].length >= 5){
          height+=50
        }
        this.setData({
          height:height+'rpx'
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
      fail: ()=>{},
      complete: ()=>{}
    });
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
    let arr = []
    console.log(this.data.days)
    this.data.days.forEach(val=>{
      val.forEach(val=>{
        arr.push(val)
      })
    });
    console.log(arr);
    wx.request({
      url: api.comment,
      data: {
        "skey":wx.getStorageSync('skey'),
        "period_id":app.globalData.periods[app.globalData.periods.length-1],
        "arr":arr
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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