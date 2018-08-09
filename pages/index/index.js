//index.js
//获取应用实例
const app = getApp()
var requestUtils = require('../../utils/request.js')

Page({
  data: {
    indicatorDots:true, //是否显示指示点
    autoplay: true,  //是否自动播放
    interval: 5000, //轮播间隔
    current:0, // 当前是第几个滑块
    duration: 500, //滑动动画时长
    circular: false, //是否采用衔接滑动
    imgUrls:null
  },
  
  onLoad: function () {
    var that = this;
    requestUtils.doPost(app.globalData.baseUrl,700,"",
    function(res){
      that.setData({
        imgUrls: res.data.info
      });
    },
    function(res){

    })
  }
  
})
