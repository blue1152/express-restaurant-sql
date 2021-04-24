const db = require('../models')
const Restaurant = db.Restaurant

const adminController = {
  getRestaurants: (req, res) => {
    // Restaurant.findAll() 把所有資料撈出來，放進 restaurants 變數，再把資料傳到 view 裡
    // 取出資料後需要用 {raw: true} 轉換成 JS 原生物件。
    return Restaurant.findAll({raw: true}.then(restaurants => {
      return res.render('admin/restaurants', {restaurants: restaurants})
    }))
  },
  createRestaurants: (req, res) => {
    return res.render('admin/create')
  },
  postRestaurants: (req, res) => {
    if (!req.body.name) {
      req.flash('error_messages', "name didn't exist")
      return res.redirect('back')
    }
    return Restaurant.create({
      name: req.body.name,
      tel: req.body.tel,
      address: req.body.address,
      opening_hours: req.body.opening_hours,
      description: req.body.description
    })
      .then((restaurant) => {
        req.flash('success_message', 'restaurant was successfully created')
        res.redirect('admin/restaurants')
      })
  }
}

module.exports = adminController