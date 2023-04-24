const Product = require('../models/product');

exports.getAll = (req, res, next) => {
  const productList = Product.getAll();
  if (productList != undefined) {
    res.status(200).json(productList);
  } else {
    next(new Error('Something wrong!'));
  }
};
