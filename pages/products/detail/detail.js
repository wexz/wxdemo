// pages/products/detail/detail.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情'
    });
    //console.log(options.Num);
    options.Num = options.Num ||682;
    //获取产品列表
    let proId1;
    let proListGet=wx.getStorageSync('proList');
    for(let i=0;i<proListGet.length;i++)
    {
      //判断与当前页面传参获取的Num
      if(proListGet[i].Num==options.Num)
      {
        proId1=i;//读取是第几个
      }
    }
    let productItem=proListGet[proId1];
    console.log(productItem);
    //读取最新数据
    this.setData({
      imgUrls:productItem.swiper,//获取到swiper页面上面的图片
      proId: proId1,
      proListArr: proListGet,
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})