const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const cartController = require('../controllers/cartController')
const orderController = require('../controllers/orderController')
const middleware = require('../middlewares/auth')

// Users
router.post('/register', userController.createUser)
router.post('/login', userController.userLogin)
router.get('/user/:userId/profile', middleware.auth, userController.getUserProfile)
router.put('/user/:userId/profile', middleware.auth, userController.updateProfile)

// Products
router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProducts)
router.get('/products/:productId', productController.getProductsById)
router.put('/products/:productId', productController.updateProduct)
router.delete('/products/:productId', productController.deleteProduct)

// Cart
router.post('/users/:userId/cart', middleware.auth, cartController.createCart)
router.put('/users/:userId/cart', middleware.auth, cartController.updateCart)
router.get('/users/:userId/cart', middleware.auth, cartController.getCart)
router.delete('/users/:userId/cart', middleware.auth, cartController.deleteCart)

// Order
router.post('/users/:userId/orders', middleware.auth, orderController.createOrder)
router.put('/users/:userId/orders', middleware.auth, orderController.updateOrder)

module.exports = router
