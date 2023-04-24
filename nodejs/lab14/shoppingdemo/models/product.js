let db = [];
let counter = 0;

class Product {
  constructor(id, title, description, price) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = ++counter; //start with 1;
    db.push(this);
    return this;
  }

  edit() {
    const index = db.findIndex((prod) => prod.id == this.id);
    db.splice(index, 1, this);
    return this;
  }

  static getAll() {
    return db;
  }

  static getById(id) {
    const index = db.findIndex((prod) => prod.id == id);
    return db[index];
  }

  static deleteById(prodId) {
    const index = db.findIndex((prod) => prod.id == prodId);
    const deletedProd = db[index];
    db.splice(index, 1);
    return deletedProd;
  }
}

let book = new Product(1, 'Book', 'Book Description', 100);
let television = new Product(2, 'Television', 'Television Description', 200);
let car = new Product(3, 'Car', 'Car Description', 300);
db.push(book);
db.push(television);
db.push(car);
counter = 3;

module.exports = Product;
