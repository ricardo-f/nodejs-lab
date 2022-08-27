// working with core modules to build a demo website

const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  const urlInfo = url.parse(req.url ,true)
  const name = urlInfo.query.name

  if(!name){
    fs.readFile('index.html', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
    })
  } else {

    const nameNewLine = name + '\r\n'

    fs.appendFile('file.txt', nameNewLine, function(err, data){
      res.writeHead(302, {
        Location: "/"
      })
      return res.end()
    })
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
