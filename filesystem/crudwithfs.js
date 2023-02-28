const fs = require('fs');
const path = require('path');

const dirpath = (__dirname);
const filepath = `${dirpath}/hii.txt`;

//read the file 
// fs.readFile(filepath, 'utf8', (err, item) => {
//         console.log(item);
// });

//update the hii.txt
// fs.appendFile(filepath,' by me ', (err,item) => {
//     if(!err) console.log("updated successfully");
// });

//rename the hii.txt
// fs.rename(filepath, `${dirpath}/new.txt`,(err,item) => {
//     if(!err) console.log("renamed successfully");
// });
//  console.log(filepath);

//delete the new.txt
// fs.unlinkSync('new.txt',(err,item) => {
//     if(!err) console.log("deleted successfully");
// });