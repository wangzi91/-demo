// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    title:"",
    image:"",
    price:"",
    value:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options.fid)
  console.log(options.ftitle)
  console.log(options.fimg)
  console.log(options.fprice)
  console.log(options.fvalue)

  this.setData({
    id: options.fid,
    title: options.ftitle,
    image: options.fimg,
    price: options.fprice,
    value: options.fvalue,
  })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  addcart: function (e) {
    var that = this
    var cartItems = wx.getStorageSync("cartItems") || []
    var exist = cartItems.find(function (el) {
      return el.id == that.data.id
    })
    if (exist) {
      exist.value = parseInt(exist.value) + 1
    } else {
      cartItems.push({
        id: this.data.id,
        title: this.data.title,
        image: this.data.image,
        price: this.data.price,
        value: 1,
        selected: true
      })
    }
    wx.showToast({
      title: "加入购物车成功！",
      duration: 1000
    })
    wx.setStorageSync("cartItems", cartItems)

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