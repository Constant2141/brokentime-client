//Component Object
Component({
  properties: {
    content:{
      type:String,
      value:'',
      observer: function(){}
    },
    turnBackTo:{
      type:String,
      value:'',
      observer: function(){}
    },

  },
  data: {
    isClose:false,
  },
  methods: {
    close(){
      this.setData({
        isClose:!this.data.isClose
      })
    },
    confirm(){
      if(this.data.turnBackTo ==''){
        this.close();
        return true
      }
      else {
        wx.redirectTo({
          url: '../../'+this.data.turnBackTo,
          success: (result)=>{
            
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      }
    }
  },
  created: function(){

  },
  attached: function(){

  },
  ready: function(){

  },
  moved: function(){

  },
  detached: function(){

  },
});