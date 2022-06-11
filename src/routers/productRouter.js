const {Router} = require('express');
const ProductController = require('../controllers/ProductController');
const productRouter = Router()
productRouter.get('', ProductController.getProducts)
productRouter.post('', ProductController.createProduct)
productRouter.put('/:id', ProductController.updateProduct)
productRouter.delete('/:id', ProductController.deleteProduct)

module.exports = productRouter