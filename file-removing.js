const fs = require('fs');

/* Removing a directory synchronously
fs.rmdirSync('./newDir');*/

try {
  /* Removes files synchronously */
  fs.unlinkSync('./newDir/newfile.js');
} catch (err){
  console.log(err);
}


