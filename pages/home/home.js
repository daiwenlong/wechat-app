

Page({

 
  data: {
    list:[],
    searchInput:''
  },
  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://localhost/medicine/app/medAll',
      method: 'POST',
      data: {
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {

        _this.setData({
          list: res.data
        })
       
      }
    })
  },

  // 跳转子页面 详情页面
  btn:function(e){
    var HomeId = e.currentTarget.dataset.id
    console.log(HomeId)
    wx.navigateTo({
      url: '../../pages/home-details/home-details?id=' + HomeId,
    })
  },
  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })
  },
  toSearch:function(){
    var name = this.data.searchInput;
    var url = "http://localhost/medicine/app/medName";
    if(name==null||name==''){
      url= 'http://localhost/medicine/app/medAll'
    }
    var _this = this;
    wx.request({
      url: url,
      method: 'POST',
      data: {
        name:name
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {

        _this.setData({
          list: res.data
        })

      }
    })

  }
  
})