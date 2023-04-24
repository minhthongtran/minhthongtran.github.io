const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/', productController.save);
router.get('/', productController.getAll);
router.delete('/:productId', productController.deleteById);
router.put('/:productId', productController.edit);
router.get('/:productId', productController.getById);

module.exports = router;
