const express = require('express')
const router = express.Router()
const passport = require('../config/passport')

const restController = require('../controllers/restController.js')
const adminController = require('../controllers/adminController.js')

router.get('/', (req, res) => {
  res.redirect('/restaurants')
})
router.get('/admin', (req, res) => {
  res.redirect('/admin/restaurants')
})
router.get('/restaurants', restController.getRestaurants)
router.get('/admin/restaurants', adminController.getRestaurants)
router.get('/admin/restaurants/create', authenticatedAdmin, adminController.createRestaurants)
router.post('/admin/restaurants', authenticatedAdmin, adminController.postRestaurants)

module.exports = router
