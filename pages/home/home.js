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
  ],
  ProductDescLong: [
    '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/63bcf275fd8393325c6f343b3c89e5c9.jpg?w=1080&h=1735',
    '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bfb8f59814fa33003e94451eeaba0f9f.jpg?w=1080&h=1397',
    '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/202a31934625738bb2e10dcdd2d28118.jpg?w=1080&h=1800'
  ],
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
    ],
    ProductDescLong: [
      '//i8.mifile.cn/v1/a1/80986f52-42e8-95cb-d420-4acc958a0aef.jpg?w=1080&h=1923&s=181.6',
      '//i8.mifile.cn/v1/a1/1f9cdfc0-3b38-a61b-2f7a-559f912384a2.jpg?w=1080&h=1349&s=181',
      '//i8.mifile.cn/v1/a1/787cc19e-b33f-5afd-c8c2-ed042598481d.jpg?w=1080&h=1508&s=160.7'
    ],
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
    ],
    ProductDescLong: [
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f5ddb967ed32856fd26b8579b25da4fa.jpg?w=1080&h=1855',
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4be84c00f6a4ae597aba0001a818954b.jpg?w=1080&h=996',
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cae9e50679b04e3e45cba8c329e52d34.jpg?w=1080&h=1861'
    ],
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
    ],
    ProductDescLong: [
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f5ddb967ed32856fd26b8579b25da4fa.jpg?w=1080&h=1855',
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4be84c00f6a4ae597aba0001a818954b.jpg?w=1080&h=996',
      '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cae9e50679b04e3e45cba8c329e52d34.jpg?w=1080&h=1861'
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
    wx.setStorageSync('proList', proList);////存储到本地
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