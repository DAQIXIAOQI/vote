// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     listData:[{
       image:"http://dev.guotu.zsylife.cn/minidata/index01.png",
       rank:1,
       "number":"001",
       name:'选手昵称',
       ballot:998 
     }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
       rank: 2,
       "number": "002",
       name: '选手昵称',
       ballot: 997
       }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
         rank: 3,
         "number": "003",
         name: '选手昵称',
         ballot: 996
     }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
       rank: 4,
       "number": "004",
       name: '选手昵称',
       ballot: 995
       }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
         rank: 5,
         "number": "005",
         name: '选手昵称',
         ballot: 994
     }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
       rank: 6,
       "number": "006",
       name: '选手昵称',
       ballot: 993
       }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
         rank: 7,
         "number": "007",
         name: '选手昵称',
         ballot: 992
     }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
       rank:8,
       "number": "008",
       name: '选手昵称',
       ballot: 991
       }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
         rank: 9,
         "number": "009",
         name: '选手昵称',
         ballot: 990
     }, {
         image: "http://dev.guotu.zsylife.cn/minidata/index01.png",
       rank: 10,
       "number": "010",
       name: '选手昵称',
       ballot: 989
     }
     ],
     loadAll:false,
     isLoading:false,
     maxl:100,
     loadNum:6
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({

      title: "获赞排行榜"

    });
    wx.setNavigationBarColor({

      frontColor: '#ffffff',

      backgroundColor: '#f0695b'

    });
  },
  onReady: function () {    
  },
  loadData(e){
      let arr = this.data.listData;
      arr = arr.concat(e.detail.result);
      this.setData({
        listData:arr
      });   
  },
  r(){
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  showRule(){
     wx.showModal({
       title: '排名规则',
       content: '这是规则规则这是规则规则这是规则规则这是规则规则这是规则规则这是规则规则这是规则规则这是规则规则这是规则规则这是规则规则这是规则规则',
       showCancel:false,
       confirmText:'知道了'
     })
  },toMain() {
    wx.navigateTo({
      url: '../main/main',
    })
  },
  
})