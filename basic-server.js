const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(function(req,res){
  console.log('REQUEST : ', req);
  res.end('Hello Client!');
});

server.listen(port, hostname);

console.log('grab market server on!');