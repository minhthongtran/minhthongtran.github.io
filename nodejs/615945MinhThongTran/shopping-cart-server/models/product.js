class Product {
  id;
  name;
  price;
  image;
  stock;
  constructor(id, name, price, image, stock) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.stock = stock;
  }

  save() {
    db.push(this);
    return this;
  }

  static getAll() {
    return db;
  }

  static updateStock(quantity) {
    this.stock += quantity;
  }

  static getMaxStockProductByName(productName) {
    const p = db.find((p) => p.name == productName);
    return p.stock;
  }
}

let db = [];
let nodejs = new Product(1, 'node.js', 9.99, './images/nodejs.png', 8);
let react = new Product(2, 'react', 19.99, './images/react.png', 5);
let angular = new Product(3, 'angular', 29.99, './images/angular.png', 13);
db.push(nodejs);
db.push(react);
db.push(angular);

module.exports = Product;
