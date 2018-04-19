// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     listData:[{
       image:"http://dev.guotu.zsylife.cn/minidata/rankbg.png",
       rank:1,
       "number":"001",
       name:'大家阿卡是',
       ballot:999 
     }, {
       image: "http://dev.guotu.zsylife.cn/minidata/rankbg.png",
       rank: 2,
       "number": "001",
       name: '大家阿卡是',
       ballot: 999
       }, {
         image: "http://dev.guotu.zsylife.cn/minidata/rankbg.png",
         rank: 3,
         "number": "001",
         name: '大家阿卡是',
         ballot: 999
     }, {
       image: "http://dev.guotu.zsylife.cn/minidata/rankbg.png",
       rank: 4,
       "number": "001",
       name: '大家阿卡是',
       ballot: 999
       }, {
         image: "http://dev.guotu.zsylife.cn/minidata/rankbg.png",
         rank: 4,
         "number": "001",
         name: '大家阿卡是',
         ballot: 999
     }, {
       image: "http://dev.guotu.zsylife.cn/minidata/rankbg.png",
       rank: 4,
       "number": "001",
       name: '大家阿卡是',
       ballot: 999
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
  }
  
})