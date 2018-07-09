// pages/products/detail/detail.js

let proImg=[{
Num:111,
swiper:[
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6efc52e32da7595519d9907cc124a50c.jpg?thumb=1&w=720&h=792',
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2764f1f61a5a7691ee5f4998e6e83666.jpg?thumb=1&w=720&h=792',
  'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9b0900deeb89fb9b2ee8faa239a27380.jpg?thumb=1&w=720&h=792'
]},
{
  Num:121,
  swiper: [
    '//i8.mifile.cn/v1/a1/2928abd1-0e07-b1ba-59cc-9f3410cf7fde!720x792.webp',
    '//i8.mifile.cn/v1/a1/3c96e923-284b-0d4c-b7e3-e3e6acd713f1!720x792.webp',
    '//i8.mifile.cn/v1/a1/a25fd308-dce7-393e-3113-02d52b817d5d!720x792.webp'
  ]
}

]
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
  // onLoad: function (options) {
  //   wx.setNavigationBarTitle({
  //     title: '商品详情'
  //   });
  //   //console.log(options.Num);
  //   options.Num = options.Num ||682;
  //   let imgUrl;
  //   for(let i=0;i<proImg.length;i++)
  //   {
  //     if (options.Num == proImg[i].Num) {
  //       imgUrl= proImg[i].swiper;
  //     }
  //   }
  //   let productItem = imgUrl;
  //   console.log(productItem);
  //    this.setData({
  //      imgUrls: productItem,
  //    })
  // },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情'
    });
    options.Num = options.Num || 682;
    console.log(options.Num);
    //获取产品列表
    let proId1;
    let proList1 = wx.getStorageSync('proList');
    for (let i = 0; i < proList1.length; i++) {
      if (proList1[i].Num == options.Num) {
        proId1 = i;
      }
    }
    let productItem = proList1[proId1];
    let cartProduct = {
      proId: productItem.Num,
      title: productItem.ProductName,
      price: productItem.CurrentPrice,
      num: parseInt(this.data.num),
      img: productItem.ProductPicSrc200,
      jump: '/pages/products/detail/detail?Num=' + productItem.Num,
    };
    console.log(productItem.swiper);
    this.setData({
      proId: proId1,
      proListArray: proList1,
      cartProduct: cartProduct,
      imgUrls: productItem.swiper
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