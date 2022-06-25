var fs=require('fs');
var data=fs.readFileSync('text.txt');
console.log(data.toString());
console.log('End Here')
console.log(__dirname)   //This will gave us the absolute directory of the path
console.log(__filename)  //This will gave us the file path directory of the path