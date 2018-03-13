const fs = require('fs');

// Read directory
fs.readdir('./', (err, content)=>{
  if(err) return err;
  console.log(content);
});

// Read file
fs.readFile('global.html', 'UTF-8', (err, content)=>{
  console.log(content);
});