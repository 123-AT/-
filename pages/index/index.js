var ben=10000,li=0.03,ben1;
Page({
  Num:function(e){
    ben=parseFloat(e.detail.value);
  },
  rate:function(e){
    li=parseFloat(e.detail.value);
  },
    calc:function(){
      if(ben>=10000){
        ben1=ben;
        for(var i=1;i<=5;i++){
          ben1=ben1*li+ben1;
        }
        this.setData({
          sum:ben1
        })
      }
      else{
        this.setData({
          sum:ben
        })
      }
    }
})

