const http = require('http');
/* Create a server */
const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hi! It is Kiyunna Flourius</h1>');
});

server.listen(4200);
console.log('Our server is running');