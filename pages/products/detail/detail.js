// pages/products/detail/detail.js
let proDetail = {
  transRate: '1000Mbps',
  routerType: '无线'
}
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
    stock:998,
    addButton:"加入购物车",
    boxFlag:true,
    num:1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled'
  },
    /**
   * 弹出层函数
   */
  //出现 boxFlag控制弹窗显示或隐藏
  //setData 将逻辑层数据发送到视图层 同时改变this.data的值
    addCart:function()
    {
      this.setData({boxFlag:false,addButton:'加入购物车'})
    },
    addBuy:function()
    {
      this.setData({boxFlag:false,addButton:'立即购买'})
    },
    //消失
    addHide: function () {

      this.setData({ boxFlag: true })
    },
    //点击加减号
    // 加
    bindPlus:function()
    {
      var num=this.data.num;
      num++;
      // 只有大于一件的时候，才能normal状态，否则disable状态  样式
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
    },
    // 减
    bindMinus:function()
    {
      var num=this.data.num;
      //大于1
      if(num>1)
      {
          num--;
      }
      // 只有大于一件的时候，才能normal状态，否则disable状态  样式
      var minusStatus=num<=1?'disabled':'normal';
      // 将数值与状态写回  
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
    },
    //手动输入个数  输入框事件
    bindManual:function(e)
    {
      //console.log(e);
      var num=e.detail.value;
      // 将数值与状态写回  
      this.setData({
        num: num
      });
    },
    //页面跳转
    todetailTags: function (e) {
      //console.log(e);
      wx.navigateTo({
        url: '/pages/products/detail/tags'
      })
    },
    toCart:function(e)
    {
      wx.switchTab({
        url: '/pages/cart/cart',
      })
    },
    toAddCart:function(e)
    {
      console.log("toAddCart",e);
      var  num=this.data.num;//数量
      var stock= e.detail.stock;//总数
      
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情'
    });
    wx.setStorageSync('proDetail', proDetail);//存储到本地
    //console.log(options.Num);
    options.Num = options.Num ||682;
    //获取产品列表
    let proId1;
    let proListGet = wx.getStorageSync('proList');//获取本地缓存
    console.log("11",proListGet);
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