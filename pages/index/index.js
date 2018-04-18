
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#757575',
    });
  }
})
