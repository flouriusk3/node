const fs = require('fs');

// Writing Files
fs.writeFile('./modules/data.html', 'Hello! This file has just been created.\n', 'UTF-8', (err)=>{
  if(err) return err;
  console.log("The file has been saved");
});

fs.appendFile('./modules/data.html', 'Extra data has been appended to this file.\n', 'UTF-8', (err)=>{
  if(err) return err;
  console.log("The file has been saved");
});