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
      this.triggerEvent('myevent',{confirm:false,isTapX:false})
      this.triggerEvent('myevent1',{confirm:false,isTapX:false,isOnlyOne:false})
      this.setData({
        isClose:!this.data.isClose,
      })
    },
    confirm(){
      if(this.data.turnBackTo ==''){
        this.setData({
          isClose:!this.data.isClose,
        })  
        this.triggerEvent('myevent1',{confirm:false,isTapX:false,isOnlyOne:false})
        this.triggerEvent('myevent',{confirm:true,isTapX:false})
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