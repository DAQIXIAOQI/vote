const app = getApp()

Page({
  data: {
    isSearch: false,
    competitorList: [{
      "number":"001",
      name:'就看大家了',
      ballot:999,
      image:'http://dev.guotu.zsylife.cn/minidata/index01.png',
      isVote:false
    }, {
      "number": "001",
      name: 'changchang的昵称',
      ballot: 999,
      image: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
      isVote: false
      }, {
        "number": "001",
        name: 'changchang的昵称',
        ballot: 999,
        image: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
        isVote: false
    }, {
      "number": "001",
      name: 'changchang的昵称',
      ballot: 999,
      image: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
      isVote: false
    },],
  },
  onLoad(){
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#757575',
    });
  },
  toggleSearch(){
    const that = this ;
    this.setData({
        isSearch : !that.data.isSearch
    });
  },
  vote(e){ 
    let dataset = e.currentTarget.dataset;
    console.log(dataset);
    if(dataset.isvote){
      wx.showToast({
        title: '你已经为TA投过票了！',
        icon: 'none'
      })
      return
    }
    let list = this.data.competitorList;
    list[dataset.index].isVote = true;
    this.setData({
      competitorList:list
    },function(){
      wx.showModal({
        title: '恭喜您',
        content: '给TA投票成功！',
        showCancel: false,
        confirmText: '好的'
      })
    });
  },
  toMain(){
    wx.navigateTo({
      url: '../main/main',
    })
  }
})
