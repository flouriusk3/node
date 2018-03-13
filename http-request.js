const https = require('https');
const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/posts'; // URL

/* GET Request */
https.get(url, res => {
  res.setEncoding('UTF-8');
  let body = '';

  // Listener
  res.on('data', data => {
    body += data;
  }); 

  res.on('end', ()=> {
    
    body = JSON.parse(body);
    console.log(` ${body[0].title} - \n`);
    // fs.writeFile('data.json', body, 'UTF-8', (err)=>{
    //   if (err) return err;
    //   console.log('Pulled posts and created file.');
    // });
  })

});

