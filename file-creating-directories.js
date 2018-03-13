const fs = require('fs');

/* Makes a directory synchronously
fs.mkdirSync("views"); */

if(!fs.exists("views")){
  fs.mkdir("views", (err)=>{
    if(err) return err;
    fs.writeFile("./views/new.html", 'This is a new directory with new data.', (err)=>{
      if(err) return err;
      console.log('Directory and file have been saved.');
    })
  });
}