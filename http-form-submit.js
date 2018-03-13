const http = require('http');
const fs = require('fs');

http.createServer((req, res)=> {
  let body = '';

  if(req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./http-form.html', 'UTF-8', (err, data)=> {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
}).listen(4200);

console.log('Working');