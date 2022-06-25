var fs=require('fs');   //file system for the dependa

//The First Parameter of the callback function is always a error function and a second parameter will be data that will return

//In the non blocking synario it wo

fs.readFile('text.txt' ,function(err,data){
    if(err){
        console.log(err);
    }
    setInterval(()=>{
        console.log("SetInterval")
    },2000)
    setTimeout(()=>{
        console.log("SetTimeout")
    },30000)
})

console.log('Start Here')
