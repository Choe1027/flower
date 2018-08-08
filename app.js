//app.js
var requestUtils = require('./utils/request.js');
App({
  data:{
    interval:null
  },
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        requestUtils.doPost(this.globalData.baseUrl,101,'{"code":"'+res.code+'"}',
        function success(res){
            console.log(res.data.info);
            if(res.data.state == 1){
             getApp().globalData.openid = res.data.info.openid
             getApp().globalData.isNeedLogin = res.data.info.isNeedLogin
            }else{//服务器异常
             console.log("服务器异常:")
             console.log(res.data)
            }
        },
        function fail(res){
         
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow:function(){
    var that = this;
    var interval = setInterval(function () {
      requestUtils.doPost(that.globalData.baseUrl,104,'',function(res){
          console.log(res.data.info);
      },function(res){

      });
    }, that.globalData.intervalTime);
    this.globalData.interval = interval;
  },
  onHide:function(){
    clearInterval(this.data.interval);
    this.globalData.interval = null;
  },
  onError:function(){

  },
  onPageNotFound:function(){

  },
  globalData: {
    intervalTime:1000*60,
    interval:null,
    userInfo: null,
    openid:null,
    isNeedLogin:0, // 0表示需要登陆，1表示不需要登陆
    baseUrl : "http://www.localhost:8888/api?"
  }
})