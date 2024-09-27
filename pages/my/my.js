// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'my',
  },
  onChange(event) {
    const name = event.detail;
    this.setData({ active: name });
    // 根据选中的 tab 名称跳转到对应的页面
    if (name === 'index') {
      wx.navigateTo({
        url: '/pages/index/index',  // 这里是你要跳转的页面路径
      });
    } else if (name === 'menu') {
      wx.navigateTo({
        url: '/pages/menu/menu',
      });
    } else if (name === 'my') {
      wx.navigateTo({
        url: '/pages/my/my',
      });
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})