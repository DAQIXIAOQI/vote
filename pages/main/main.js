const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideData: ["http://dev.guotu.zsylife.cn/minidata/index01.png", "http://dev.guotu.zsylife.cn/minidata/index01.png", "http://dev.guotu.zsylife.cn/minidata/index01.png","http://dev.guotu.zsylife.cn/minidata/index01.png"],
    messageData:[{
      avatar:'http://dev.guotu.zsylife.cn/minidata/index01.png',
      name:'小葱',
      time:'4月27日',
      comment:'希望你能得到好票数~！'
    }, {
      avatar: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
      name: '小葱',
      time: '4月27日',
      comment: '希望你能得到好票数~！'
    }],
    isVote:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.editBox = this.selectComponent("#editBox");
  },
  vote(){
    if(this.data.isVote){
      wx.showToast({
        title: '你已经投过票了！',
        icon:'none'
      })
      return
    }
    this.setData({
      isVote:true
    });
    wx.showModal({
      title: '恭喜您',
      content: '给TA投票成功！',
      showCancel: false,
      confirmText: '好的'
    })
  },
  message(){
    this.editBox.toggle();
  },
  addMessage(e){
    if(e.detail.value !=''){
      const that = this;
      let data = this.data.messageData;
      let comment = {
          avatar: app.globalData.userInfo.avatarUrl,
          name: app.globalData.userInfo.nickName,
          time: (new Date().getMonth()) + 1 + '月' + (new Date().getDate()) + '日',
          comment: e.detail.value
        }
      if(!comment.avatar || !comment.name){
          wx.showModal({
            title: '警告',
            content: '你未授权登录，请先登录',
            showCancel:false,
            confirmText:'知道了'
          })
          return
      }  
      data.unshift(comment);
      this.setData({
        messageData:data
      },function(){
        that.editBox.clear();
        wx.showModal({
          title:'恭喜您',
          content: '留言成功，快去查看吧~！',
          showCancel: false,
          confirmText: '好的'
        });
      });

    }
  }
})