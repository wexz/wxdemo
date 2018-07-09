// pages/home/home.js
const app = getApp()
let cateList = [{
  "cateName": "手机",
  "No": '111,121'
},
{
  "cateName": "家电",
  "No": '321,521'
}]
let proList= [{
  Num: 111,
  img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792',
  pro_title: '红米Note 5 AI双摄',
  pro_price: 1399,
  pro_priceold: 1499,
  cateName: '手机',
  swiper: [
    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792',
    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2764f1f61a5a7691ee5f4998e6e83666.jpg?thumb=1&w=720&h=792',
    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9b0900deeb89fb9b2ee8faa239a27380.jpg?thumb=1&w=720&h=792'
  ]
}, {
    Num: 121,
    img: '//i8.mifile.cn/v1/a1/2928abd1-0e07-b1ba-59cc-9f3410cf7fde!720x792.webp',
    pro_title: '小米6 变焦双摄',
    pro_price: 2299,
    pro_priceold: 2499,
    cateName: '手机',
    swiper: [
      '//i8.mifile.cn/v1/a1/2928abd1-0e07-b1ba-59cc-9f3410cf7fde!720x792.webp',
      '//i8.mifile.cn/v1/a1/3c96e923-284b-0d4c-b7e3-e3e6acd713f1!720x792.webp',
      '//i8.mifile.cn/v1/a1/a25fd308-dce7-393e-3113-02d52b817d5d!720x792.webp',
    ]
  }, {
    Num: 321,
    img: 'https://i1.mifile.cn/a1/pms_1519959193.42473450!220x220.jpg',
    pro_title: '小米电视4A 40英寸',
    pro_price: 1399,
    pro_priceold: 1599,
    cateName: '家电',
    swiper: [
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/396f4f9484abeb5f11352e1111084e4d.jpg?thumb=1&w=720&h=792',
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2312e48bd8e55e8b8595dc49f7ae358c.jpg?thumb=1&w=720&h=792'
    ]
  }, {
    Num: 521,
    img: 'https://i1.mifile.cn/a1/pms_1499072633.96298268!220x220.jpg',
    pro_title: '小米盒子3 增强版',
    pro_price: 399,
    pro_priceold: 499,
    cateName: '家电',
    swiper: [
      '//i8.mifile.cn/v1/a1/8211c189-b600-91df-9b9f-8738c52c89e0!720x792.webp',
      '//i8.mifile.cn/v1/a1/afcf9651-3d01-e9cb-eda4-579181a44f57!720x792.webp',
      '//i8.mifile.cn/v1/a1/3fa86d00-8a00-7b82-5398-f90321614ffb!720x792.webp'
    ]
  }]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    cateList:cateList,
    //proList:proList,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('proList', proList);
    this.setData({
      proList: proList,
    })
    console.log(proList);
  },
  //页面跳转
  toProList: function (e) {
    var cateName = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/products/list/list?cateName=' + cateName,
    })
  },
  toProDetail: function (e) {
    var Num = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/products/detail/detail?Num=' + Num
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