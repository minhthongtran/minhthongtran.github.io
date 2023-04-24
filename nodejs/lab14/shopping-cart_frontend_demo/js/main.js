window.onload = function (evt) {
  getProducts();

  document.getElementById('btnSubmitProduct').addEventListener('click', (evt) => {
    var pathname = window.location.pathname;
    var dir = pathname.substring(0, pathname.lastIndexOf('/'));
    window.location.href = dir + '/add.html';
  });
};

async function getProducts() {
  const response = await fetch('http://localhost:3000/products');
  const jsonData = await response.json();

  for (let e of jsonData) {
    addNewProductRowToTable(e.id, e.title, e.description, e.price);
  }
}

function addNewProductRowToTable(id, title, description, price) {
  const row = document.createElement('tr');
  let cell = document.createElement('td');
  cell.appendChild(document.createTextNode(id));
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(title));
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(description));
  row.appendChild(cell);

  cell = document.createElement('td');
  cell.appendChild(document.createTextNode(price));
  row.appendChild(cell);

  cell = document.createElement('td');
  createActionProductBtn(id, cell);
  row.appendChild(cell);

  document.getElementById('tbodyProductList').appendChild(row);
}

function createActionProductBtn(idx, tdEditProduct) {
  let buttonEdit = document.createElement('button');
  buttonEdit.setAttribute('class', 'btn btn-outline-success');
  buttonEdit.setAttribute('id', 'edit-product-' + idx);
  buttonEdit.setAttribute('type', 'button');
  buttonEdit.addEventListener('click', editProduct);
  buttonEdit.appendChild(document.createTextNode('Edit'));
  tdEditProduct.appendChild(buttonEdit);

  buttonEdit = document.createElement('button');
  buttonEdit.setAttribute('class', 'btn btn-outline-danger');
  buttonEdit.setAttribute('id', 'delete-product-' + idx);
  buttonEdit.setAttribute('type', 'button');
  buttonEdit.addEventListener('click', deleteProduct);
  buttonEdit.appendChild(document.createTextNode('Delete'));
  tdEditProduct.appendChild(buttonEdit);
}

function editProduct(evt) {
  let idx = evt.target.getAttribute('id').split('-')[2];
  sessionStorage.setItem('editProduct', idx);
  var pathname = window.location.pathname;
  var dir = pathname.substring(0, pathname.lastIndexOf('/'));
  window.location.href = dir + '/add.html';
}

async function deleteProductApi(id) {
  let setting = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch('http://localhost:3000/products/' + id, setting);
  const jsonData = await response.json();
  return jsonData;
}

function deleteProduct(evt) {
  let id = evt.target.getAttribute('id').split('-')[2];
  const data = deleteProductApi(id);
  if (data) {
    window.location.reload();
  }
}
