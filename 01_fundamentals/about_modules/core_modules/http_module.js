// http is core module of Node.js
// more at: https://nodejs.org/api/http.html

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // give response code
  res.statusCode = 200;
  //define content-type to be show
  res.setHeader('Content-Type', 'text/html');
  // the content
  res.end( '<h1>HTML Content</h1><p>paragraph</p>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
