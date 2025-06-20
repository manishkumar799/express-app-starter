// index.js
const express = require('express');
const router = express.Router();

const userRoutes = require('../modules/user/user.routes');
const productRoutes = require('../modules/product/product.routes');

router.use('/users', userRoutes);
// router.use('/products', productRoutes);

module.exports = router;
