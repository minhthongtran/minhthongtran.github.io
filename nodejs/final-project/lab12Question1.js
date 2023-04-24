const http = require('http');
var fs = require('fs');
var path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const method = req.method;

  if (method == 'GET' || method == 'POST') {
    //Solution 1:
    var img = fs.readFileSync('./images/js-image.png');
    res.writeHead(200, { ContentType: 'image/png' });
    res.end(img);

    //Solution 2:
    // var s = fs.createReadStream(path.join(__dirname, '/images/js-image.png'));
    // s.on('open', function () {
    //   res.setHeader('Content-Type', 'image/png');
    //   s.pipe(res);
    // });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
