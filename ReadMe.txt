Non Blocking Function won't wait for the fist thread to complete

Blocking function the second thread won't hit until the first one done

setTimeOut us the build in node js api function which executes a given method only a desires time period ends

Example:

setTimeOut((err)=>{
    console.log("Sundar Anbu")
},3000)

SetInterval will execute the function in particular interval of time

Example:

SetInterval(()=>{
    console.log("Anbu")
},3000)

SetImmediate will be executed once all te parameter are passes

Example:

console.log("First")
let timer=SetImmediate(()=>{
    console.log("Hello World")
})
console.log("Second")


File System

Synchronous

For the synchronous forms we should use Sync along with that

Asynchronous

For the Asynchronous form we should not use the sync along with that


callback:

Callback is an asynchronous equivaent for a function and is called at the completion of each task

var fs=require('fs');
fs.readFile('test.txt',function(err,data){});

This will execute after file read is complete

Exports

While we are creating the function that should be exported to the other function we should use the exports not export