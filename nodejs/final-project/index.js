const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const method = req.method;
  const URL = req.url;
  if (URL === '/') {
    console.log('Hello world');
    res.write('Hello World');
  }
  if (method == 'GET' && URL === '/message') {
    console.log('GET is processed');
    res.write('GET is processed');
  }
  if (method == 'POST' && URL === '/message') {
    console.log('POST is processed');
    res.write('POST is processed');
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
