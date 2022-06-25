var fs=require('fs');
var event=require('events');                 //importing the events module

const myEmitter=new event.EventEmitter();   //create object of EventEmitter

fs.readFile(text.txt,(err,data)=>{
    console.log(data.toString());
    myEmitter.emit('readFile');             //Emitting event
});

myEmitter.on('readFile',()=>{
    console.log('\nRead Event Occureed')      //Registering Listener and defining the event Handler
})