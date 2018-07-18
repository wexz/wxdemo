// pages/products/detail/detail.js
let proDetail = {
  transRate: '1000Mbps',
  routerType: '无线'
}
let cartList = wx.getStorageSync('cartList') || [];
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proDetail: proDetail,
    //初始化弹窗中加入购物车
    stock: 998,
    addButton: "加入购物车",
    boxFlag: true,
    // input默认是1 
    Innum: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled'
  },
  /**
   * 弹出层函数
   */
  //出现 boxFlag控制弹窗显示或隐藏
  //setData 将逻辑层数据发送到视图层 同时改变this.data的值
  addCart: function() {
    this.setData({
      boxFlag: false,
      addButton: '加入购物车'
    })
  },
  addBuy: function() {
    this.setData({
      boxFlag: false,
      addButton: '立即购买'
    })
  },
  //消失
  addHide: function() {

    this.setData({
      boxFlag: true
    })
  },
  //点击加减号
  // 加
  bindPlus: function() {
    var Innum = this.data.Innum;
    Innum++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  样式
    var minusStatus = Innum < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      Innum: Innum,
      minusStatus: minusStatus
    });
  },
  // 减
  bindMinus: function() {
    var Innum = this.data.Innum;
    //大于1
    if (Innum > 1) {
      Innum--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  样式
    var minusStatus = Innum <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      Innum: Innum,
      minusStatus: minusStatus
    });
  },
  //手动输入个数  输入框事件
  bindManual: function(e) {
    //console.log(e);
    var Innum = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      Innum: Innum
    });
  },
  //页面跳转
  todetailTags: function(e) {
    //console.log(e);
    wx.navigateTo({
      url: '/pages/products/detail/tags'
    })
  },
  toCart: function(e) {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  /*加入购物车*/
  toAddCart: function(e) {
    var testProduct = this.data.cartProduct;
    //console.log('aa',this.data.Innum); 5
    //console.log('22',testProduct.Innum);  1
    testProduct.Innum = this.data.Innum; //获取当前页面数量
    
    var flag = false ;
    //判断购物车若有相同产品,则只修改产品的数量
    for(let i=0;i<cartList.length;i++)
    {
      if(cartList[i].proId==testProduct.proId)
      {
        cartList[i].Innum=parseInt(cartList[i].num)+parseInt(testProduct.Innum);
        flag = true;
      }
    }
    //否则添加新的产品到购物车
    flag == false?cartList.push(testProduct):'';
    console.log('cartList', cartList);
    this.setData({
      cartNum:cartList.length
    });
    wx.setStorageSync('cartList', cartList);//存储本地
    //console.log(cartList);
    //显示消息提示框
    wx.showToast({
      title: '已加入购物车',//提示内容
      icon:'success',//图标
      duration:2000, //提示延迟的时间
      mask:true,//透明蒙层
    })
    this.addHide();//弹窗函数隐藏
  },
  /*立即购买*/
  toPay:function(e)
  {
    var testProduct = this.data.cartProduct;
    testProduct.Innum=this.data.Innum;
    let payList=[];
    payList.push(testProduct);
    wx.setStorageSync('payList', payList)
    console.log('payList',payList);
    wx.navigateTo({
      url: '/pages/order/pay/pay',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '商品详情'
    });
    wx.setStorageSync('proDetail', proDetail); //存储到本地
    //console.log(options.Num);
    options.Num = options.Num || 682;
    //获取产品列表
    let proId1;
    let proListGet = wx.getStorageSync('proList'); //获取本地缓存
    console.log("11", proListGet);
    for (let i = 0; i < proListGet.length; i++) {
      //判断与当前页面传参获取的Num
      if (proListGet[i].Num == options.Num) {
        proId1 = i; //读取是第几个
      }
    }
    let productItem = proListGet[proId1];
    console.log(productItem);
    //初始化购物车
    let cartProduct = {
      proId: productItem.Num,
      title: productItem.pro_title,
      price: productItem.pro_price,
      Innum: parseInt(this.data.Innum),
      img: productItem.img,
      jump: '/pages/products/detail/detail?Num=' + productItem.Num,
    };
    console.log('cartProduct初始化', cartProduct);
    //读取最新数据
    this.setData({
      imgUrls: productItem.swiper, //获取到swiper页面上面的图片
      proId: proId1,
      cartProduct: cartProduct, //初始化购物车
      proListArr: proListGet,
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    cartList = wx.getStorageSync('cartList') || [];
    this.setData({
      cartNum: cartList.length
    });
    console.log(cartList.length);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})