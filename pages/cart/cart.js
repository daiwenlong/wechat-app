
Page({
  data: {
    cartItems:[],
  },
  onLoad:function(e){
   
  },
   onShow: function () {
     var state = wx.getStorageSync("status")
     var cartItems = wx.getStorageSync("cartItems")
     console.log(state)
     if (state == 0) {
       this.setData({
         cartItems: []
       })
     }else{
       this.setData({
         cartItems: cartItems
       })
     }
     
   },

   //删除
   shanchu:function(e){
     var cartItems = this.data.cartItems  //获取购物车列表
     var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
     cartItems.splice(index,1)
     this.setData({
       cartItems: cartItems
     });
     if (cartItems.length) {
       this.setData({
         cartList: false
       });
     }
     wx.setStorageSync("cartItems", cartItems)
   },


      //提示
  
})