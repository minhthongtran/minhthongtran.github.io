const ShoppingCart = require('../models/shoppingcart');
const Product = require('../models/shoppingcart');

exports.getAll = (req, res, next) => {
  const list = ShoppingCart.getAll();
  if (list != undefined) {
    res.status(200).json(list);
  } else {
    next(new Error('Something wrong!'));
  }
};

exports.getShoppingCartByUsername = (req, res, next) => {
  const list = ShoppingCart.getShoppingCartByUsername(req.params.username);
  res.status(200).json(list);
};

exports.save = (req, res, next) => {
  const item = new ShoppingCart(
    req.body.id,
    req.body.username,
    req.body.productName,
    req.body.productPrice,
    req.body.productPrice * req.body.productQuantity,
    req.body.productQuantity
  );
  const curCartItem = ShoppingCart.getShoppingCartByUsernameAndProductName(
    req.body.username,
    req.body.productName
  );
  let resItem;
  if (!curCartItem) {
    resItem = item.save();
    res.status(201).json(item);
  } else {
    //let maxOfStock = Product.getMaxStockProductByName(req.body.productName);
    let productQuantity = parseInt(curCartItem.productQuantity) + parseInt(item.productQuantity);
    // if (productQuantity > maxOfStock) {
    //   next(new Error('Max value of stock is ' + maxOfStock));
    // } else {
    item.id = curCartItem.id;
    item.productQuantity = productQuantity;
    resItem = item.edit();
    res.status(200).json(item);
    // }
  }
  if (!resItem) {
    next(new Error('Something wrong!'));
  }
};

exports.edit = (req, res, next) => {
  //let maxOfStock = Product.getMaxStockProductByName(req.body.productName);
  // if (req.body.productQuantity > maxOfStock) {
  //   next(new Error('Max value of stock is ' + maxOfStock));
  // } else {
  const item = new ShoppingCart(
    req.params.shoppingCartId,
    req.body.username,
    req.body.productName,
    req.body.productPrice,
    req.body.total,
    req.body.productQuantity
  ).edit();
  if (item != undefined) {
    res.status(200).json(item);
  } else {
    next(new Error('Something wrong!'));
  }
  //}
};

exports.deleteById = (req, res, next) => {
  console.log(req.params.shoppingCartId);
  const delIdx = ShoppingCart.delete(req.params.shoppingCartId);
  if (delIdx != undefined) {
    res.status(200).json(delIdx);
  } else {
    next(new Error('Something wrong!'));
  }
};
