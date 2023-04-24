let editProductId = undefined;
window.onload = function (evt) {
  editProductId = sessionStorage.getItem('editProduct');
  if (editProductId) {
    getProduct(editProductId);
    document.getElementById('register-group').setAttribute('hidden', true);
    document.getElementById('edit-group').removeAttribute('hidden');
  } else {
    document.getElementById('register-group').removeAttribute('hidden');
    document.getElementById('edit-group').setAttribute('hidden', true);
  }

  document.getElementById('btnEdit').addEventListener('click', (event) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    data = editProduct(title, description, price);

    var pathname = window.location.pathname;
    var dir = pathname.substring(0, pathname.lastIndexOf('/'));
    window.location.href = dir + '/index.html';
  });

  document.getElementById('btnRegister').addEventListener('click', (event) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    data = postProduct(title, description, price);

    document.getElementById('title').innerHTML = data;
    document.getElementById('myform').reset();

    var pathname = window.location.pathname;
    var dir = pathname.substring(0, pathname.lastIndexOf('/'));
    window.location.href = dir + '/index.html';
  });
};

async function editProduct(title, description, price) {
  let b = { title: title, description: description, price: price };
  let id = editProductId;
  let setting = {
    method: 'PUT',
    body: JSON.stringify(b),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch('http://localhost:3000/products/' + id, setting);
  const jsonData = await response.json();
  return jsonData;
}

async function getProduct(id) {
  let setting = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch('http://localhost:3000/products/' + id, setting);
  const jsonData = await response.json();
  displayProduct(jsonData);
}

function displayProduct(data) {
  document.getElementById('title').value = data.title;
  document.getElementById('description').value = data.description;
  document.getElementById('price').value = data.price;
  sessionStorage.removeItem('editProduct');
}

async function postProduct(title, description, price) {
  let b = { title: title, description: description, price: price };
  let setting = {
    method: 'POST',
    body: JSON.stringify(b),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch('http://localhost:3000/products', setting);
  const jsonData = await response.json();
  return jsonData;
}
