var productList = [];
window.addEventListener('load', function (evt) {
  getCurrentUser();
  displayProductList();

  //Get list of shopping cart base on username of current user
  displayShoppingCartList();
});

function getCurrentUser() {
  const accessToken = sessionStorage.getItem('accessToken');
  const currentUser = JSON.parse(accessToken);
  if (currentUser === undefined || currentUser === null) {
    var pathname = window.location.pathname;
    var dir = pathname.substring(0, pathname.lastIndexOf('/'));
    window.location.href = dir + '/login.html';
  } else {
    document.getElementById('userLogin').innerHTML = 'Welcome, ' + currentUser.username;
  }
  return currentUser;
}
async function displayShoppingCartList() {
  const jsonData = await getShoppingCartList();
  let totalCart = 0;
  for (let e of jsonData) {
    let total = e.productPrice * e.productQuantity;
    totalCart += total;
    addNewShoppingCartRowToTable(
      e.id,
      e.productName,
      e.productPrice,
      total,
      e.productQuantity,
      false
    );
  }
  if (jsonData === undefined || jsonData == null || jsonData.length == 0) {
    //Show empty list
    document.getElementById('noItem').removeAttribute('hidden');
    document.getElementById('myShoppingCart').setAttribute('hidden', true);
    document.getElementById('placeOrder').setAttribute('hidden', true);
  } else {
    document.getElementById('noItem').setAttribute('hidden', true);
    document.getElementById('myShoppingCart').removeAttribute('hidden');
    document.getElementById('placeOrder').removeAttribute('hidden');
  }
  if (jsonData.length > 0) {
    addNewShoppingCartRowToTable(0, 'Total: ' + totalCart, '', '', '', true);
  }
}

async function getShoppingCartList() {
  const uri = 'http://localhost:5000/shoppingcarts/users/' + getCurrentUser().username + '/carts';
  const response = await fetch(uri, { method: 'GET', headers: getHeader() });
  return await response.json();
}

async function displayProductList() {
  const response = await fetch('http://localhost:5000/products', {
    method: 'GET',
    headers: getHeader(),
  });
  const jsonData = await response.json();
  productList = jsonData;
  for (let e of jsonData) {
    addNewProductRowToTable(e.name, e.price, e.image, e.stock);
  }
}

async function addProductShoppingCart(productName, productPrice) {
  let maxOfStock = findMaxStockValue(productName);
  const shoppingCartList = await getShoppingCartList();

  const currentQuantity = shoppingCartList.find((s) => s.productName == productName);
  //console.log(currentQuantity.productQuantity);
  if (currentQuantity !== undefined && parseInt(currentQuantity.productQuantity) + 1 > maxOfStock) {
    alert('Max value of Stock is: ' + maxOfStock);
    return;
  }
  const response = await fetch('http://localhost:5000/shoppingcarts', {
    method: 'POST',
    body: JSON.stringify({
      username: getCurrentUser().username,
      productName: productName,
      productPrice: productPrice,
      productQuantity: 1,
    }),
    headers: getHeader(),
  });
  let jsonData = await response.json();
  if (jsonData) {
    //re-display shopping cart table
    window.location.reload();
  }
}

async function deleteProductShoppingCart(id) {
  const response = await fetch('http://localhost:5000/shoppingcarts/' + id, {
    method: 'DELETE',
    headers: getHeader(),
  });
  let jsonData = await response.json();
  if (jsonData) {
    console.log('Delete shopping cart ' + jsonData);
  }
}

async function editProductShoppingCart(id, productName, productPrice, total, productQuantity) {
  const response = await fetch('http://localhost:5000/shoppingcarts/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      username: getCurrentUser().username,
      productName: productName,
      productPrice: productPrice,
      total: total,
      productQuantity: productQuantity,
    }),
    headers: getHeader(),
  });
  let jsonData = await response.json();
  if (jsonData) {
    console.log('Updated shopping cart ' + jsonData.id);
  }
}

function addNewShoppingCartRowToTable(idx, name, price, total, quantity, isFooter) {
  const row = document.createElement('tr');
  row.setAttribute('id', 'item-' + idx);
  let cell = document.createElement('td');
  cell.setAttribute('id', 'product-name-' + idx);
  cell.appendChild(document.createTextNode(name));
  row.appendChild(cell);
  if (isFooter == true) {
    cell.setAttribute('colspan', 4);
    cell.setAttribute('id', 'tableFooter');
  } else {
    cell = document.createElement('td');
    cell.setAttribute('id', 'product-price-' + idx);
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.setAttribute('id', 'product-total-' + idx);
    cell.appendChild(document.createTextNode(total));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.setAttribute('id', 'quantity-group-' + idx);
    cell.setAttribute('class', 'quantity-group');
    createPlusMinusQuantity(idx, cell, quantity);
    row.appendChild(cell);
  }
  document.getElementById('tbodyShoppingCart').appendChild(row);
  document.getElementById('noItem').setAttribute('hidden', true);
  document.getElementById('myShoppingCart').removeAttribute('hidden');
}
function plusQuantity(e) {
  let inputQuantity = e.target.offsetParent.childNodes[1];
  let idx = e.target.getAttribute('id').split('-');
  let productName = document.getElementById('product-name-' + idx[2]).innerHTML;
  let maxStockValue = findMaxStockValue(productName);
  let quantity = parseInt(inputQuantity.value) + 1;
  if (quantity <= maxStockValue) {
    inputQuantity.value = parseInt(inputQuantity.value) + 1;
    let productName = document.getElementById('product-name-' + idx[2]).innerText;
    let productPrice = document.getElementById('product-price-' + idx[2]).innerText;
    let total = productPrice * inputQuantity.value;
    editProductShoppingCart(idx[2], productName, productPrice, total, inputQuantity.value);
    window.location.reload();
  } else {
    alert('Max value of Stock is: ' + maxStockValue);
  }
}

function minusQuantity(e) {
  let inputQuantity = e.target.offsetParent.childNodes[1];
  let idx = e.target.getAttribute('id').split('-');
  if (inputQuantity.value - 1 > 0) {
    inputQuantity.value = inputQuantity.value - 1;
    let productName = document.getElementById('product-name-' + idx[2]).innerText;
    let productPrice = document.getElementById('product-price-' + idx[2]).innerText;
    let total = productPrice * inputQuantity.value;
    editProductShoppingCart(idx[2], productName, productPrice, total, inputQuantity.value);
    window.location.reload();
  } else {
    //delete row
    let deleteRow = document.getElementById('item-' + idx[2]);
    deleteRow.remove();
    deleteProductShoppingCart(idx[2]);
  }
}

function findMaxStockValue(productName) {
  return productList.find((p) => p.name == productName).stock;
}

function createPlusMinusQuantity(idx, tdQuantity, quantity) {
  let inputGroup = document.createElement('span');
  inputGroup.setAttribute('class', 'input-group');
  let buttonMinus = document.createElement('button');
  buttonMinus.setAttribute('class', 'btn btn-outline-danger btn-number');
  buttonMinus.setAttribute('id', 'minus-quantity-' + idx);
  buttonMinus.setAttribute('type', 'button');
  buttonMinus.addEventListener('click', minusQuantity);
  buttonMinus.appendChild(document.createTextNode('-'));

  let buttonPlus = document.createElement('button');
  buttonPlus.setAttribute('class', 'btn btn-outline-success btn-number');
  buttonPlus.setAttribute('type', 'button');
  buttonPlus.setAttribute('id', 'plus-quantity-' + idx);
  buttonPlus.addEventListener('click', plusQuantity);
  buttonPlus.appendChild(document.createTextNode('+'));

  let inputQuantity = document.createElement('input');
  inputQuantity.setAttribute('type', 'text');
  inputQuantity.setAttribute('class', 'form-control input-number');
  tdQuantity.appendChild(inputGroup);
  inputGroup.appendChild(buttonMinus);
  inputGroup.appendChild(inputQuantity);
  inputQuantity.value = quantity;
  inputGroup.appendChild(buttonPlus);
}

function addNewProductRowToTable(name, price, image, stock) {
  const row = document.createElement('tr');
  let cell = document.createElement('td');
  cell.appendChild(document.createTextNode(name));
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(price));
  row.appendChild(cell);

  cell = document.createElement('td');
  let productImage = document.createElement('img');
  productImage.setAttribute('src', image);
  productImage.setAttribute('class', 'product-image');
  cell.appendChild(productImage);
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(stock));
  row.appendChild(cell);

  cell = document.createElement('td');
  let cartCell = document.createElement('button');
  let cartImage = document.createElement('img');
  cartCell.appendChild(cartImage);
  cartImage.setAttribute('src', './images/cart.png');
  cartImage.setAttribute('class', 'product-image');
  cartCell.setAttribute('class', 'btn btn-outline-warning btnAdd');
  cartCell.setAttribute(
    'onclick',
    'addProductShoppingCart(' + "'" + name + "'" + ',' + "'" + price + "'" + ')'
  );
  cell.appendChild(cartCell);
  row.appendChild(cell);
  document.getElementById('tbodyProductList').appendChild(row);
}

function getHeader() {
  const curUser = getCurrentUser();
  return {
    'Content-type': 'application/json; charset=UTF-8',
    'Access-Token': JSON.stringify(curUser),
  };
}
