// miniprogram/pages/timeline/timeline.js
const query = wx.createSelectorQuery();
Component({
  properties: {
    timeline: Object
  },
  data: {
    t:true,
    f:false,
    specialTime:''
  },
  attached(){

  },
  ready() {
    // console.log(query);
    // console.log(this.data.timeline.issueTime);
    if (this.data.timeline.issueTime == "6:00") {
      this.setData({
        specialTime: '早晨'
      })
    }
    else if(this.data.timeline.issueTime == "12:00"){
      this.setData({
        specialTime: '中午'
      })
    }
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() { },
    hide() { },
    resize() { },
  },
})