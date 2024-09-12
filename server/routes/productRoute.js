const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
router.post('/submit',productController.createdProduct)
router.get('/get',productController.getProduct)
router.put('/update/:id',productController.updateProduct)
router.delete('/delete/:id',productController.deleteProduct)
module.exports = router