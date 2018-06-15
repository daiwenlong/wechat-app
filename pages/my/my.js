Page({
  data: {
    phone: '',
    password: '',
    status:0
  },

  onShow:function(){
    var state = wx.getStorageSync("name");
    if (state != null && state!=''){
      this.setData({
        status: 1,
        phone:state
      })
    }
  },

  // 获取输入账号  
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码  
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录  
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '登录失败',
        icon: 'fail',
        duration: 500
      })
    } else {
      
      var name = this.data.phone;
      var password = this.data.password;
      var _this = this;
      console.log(name)
      wx.request({
        url: 'http://localhost/medicine/app/login',
        method: 'POST',
        data: {
          name: name,
          password: password
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          
          if (res.data.name==null){
            wx.showToast({
              title: '登录失败',
              icon: 'fail',
              duration: 500
            })
          }else{
            wx.setStorageSync("name", res.data.name);
            wx.setStorageSync("status",1);
            _this.setData({
              phone: res.data.name,
              status:1
            })
            wx.showToast({
              title: '登录成功',
              icon: 'fail',
              duration: 500
            })
          }
          console.log(res)
        }
      })
      
    }
  },
  loginout:function(){
    wx.setStorageSync("name",'');
    wx.setStorageSync("status", 0);
    this.setData({
      phone: null,
      status:0
    })
  }
}) 