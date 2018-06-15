

Page({
  data:{
    data:null
  },
 

  addcart: function (e) {
    var state = wx.getStorageSync("status")
    if (state == 0){
      wx.showToast({
        title: "请先登录！",
        duration: 1000
      })
      return
    }
    var cartItems = wx.getStorageSync("cartItems") || []
    var exist = cartItems.find(function (el) {
      return el.id == e.target.dataset.id
    })

    //如果购物车里面有该商品那么他的数量每次加一
    if (exist){
      wx.showToast({
        title: "已收藏！",
        duration: 1000
      })
      return;
    }else{
      cartItems.push({
        id: e.target.dataset.id,
        name:e.target.dataset.name,
        type: e.target.dataset.type,
        numder: e.target.dataset.number,
        remarks: e.target.dataset.remarks,
        time: e.target.dataset.time
      })
    }

    wx.showToast({
      title: "收藏成功！",
      duration: 1000
    })
        
    //更新缓存数据
    wx.setStorageSync("cartItems", cartItems)

  },

  onLoad: function (option){
    var homeid = option.id
    console.log(homeid)
    var _this = this;
    wx.request({
      url: 'http://localhost/medicine/app/medId',
      method: 'POST',
      data: {
        id:homeid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {

        _this.setData({
          data: res.data
        })

      }
    })
  }

})