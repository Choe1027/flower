//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots:true, //是否显示指示点
    autoplay: true,  //是否自动播放
    interval: 5000, //轮播间隔
    current:0, // 当前是第几个滑块
    duration: 1000, //滑动动画时长
    circular: true, //是否采用衔接滑动
  },
  
  onLoad: function () {
    
  }
  
})
