const app = getApp()

Page({
  data: {
    isSearch: false,
    searchVal: '',
    competitorList: [{
      "number": "001",
      name: '就看大家了',
    }],
    slideData: ["http://dev.guotu.zsylife.cn/minidata/index01.png", "http://dev.guotu.zsylife.cn/minidata/index03.png", "http://dev.guotu.zsylife.cn/minidata/index02.png", "http://dev.guotu.zsylife.cn/minidata/index03.png"],
    competitorList: [{
      "number": "001",
      name: '就看大家了',
      ballot: 999,
      image: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
      isVote: false
    }, {
      "number": "001",
      name: 'changchang的昵称',
      ballot: 999,
      image: 'http://dev.guotu.zsylife.cn/minidata/index02.png',
      isVote: false
    }, {
      "number": "001",
      name: 'changchang的昵称',
      ballot: 999,
      image: 'http://dev.guotu.zsylife.cn/minidata/index03.png',
      isVote: false
    }, {
      "number": "001",
      name: 'changchang的昵称',
      ballot: 999,
      image: 'http://dev.guotu.zsylife.cn/minidata/index01.png',
      isVote: false
    },],
    countDown: {
      h: "4",
      m: "4",
      s: "4",
    }
  },
  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#757575',
    });
  },
  onReady() {

  }
  ,
  toggleSearch() {
    const that = this;
    this.setData({
      isSearch: !that.data.isSearch
    });
  },
  vote(e) {
    let dataset = e.currentTarget.dataset;
    console.log(dataset);
    if (dataset.isvote) {
      wx.showToast({
        title: '你已经为TA投过票了！',
        icon: 'none'
      })
      return
    }
    let list = this.data.competitorList;
    list[dataset.index].isVote = true;
    this.setData({
      competitorList: list
    }, function () {
      wx.showModal({
        title: '恭喜您',
        content: '给TA投票成功！',
        showCancel: false,
        confirmText: '好的'
      })
    });
  },
  toMain() {
    wx.navigateTo({
      url: '../main/main',
    })
  },
  activityIntr() {
    wx.showModal({
      title: '活动介绍',
      content: '本次投票是由.....对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）对于 POST 方法lication/ json 的数据，会对数据进行 JSON 序列化对于 POST 方法且 headon/ x - www - form - urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）',
      showCancel: false
    })
  },
  searchInput(e) {
    this.setData({
      searchVal: e.detail.value
    });
  }
})
