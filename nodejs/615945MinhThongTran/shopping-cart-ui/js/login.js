window.onload = function () {
  document.getElementById('loginForm').addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  document.getElementById('loginBtn').addEventListener('click', login);
};

async function login() {
  const response = await fetch('http://localhost:5000/login', {
    method: 'POST',
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    let json = await response.json();
    //login successful save token to session storage
    sessionStorage.setItem('accessToken', JSON.stringify(json));
    var pathname = window.location.pathname;
    var dir = pathname.substring(0, pathname.lastIndexOf('/'));
    window.location.href = dir + '/product.html';
  } else {
    let json = await response.json();
    document.getElementById('errorMsg').innerHTML = json;
  }
}
