const fs = require('fs');

/* Renames files synchronously and renames it
fs.renameSync('./newfile2.js', 'newDir/newfile.js');*/

fs.renameSync('./newDir/ChildDir', './ParentDir');