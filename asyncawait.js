async function myfunction(){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve("sucesss");
    },2000));
}

async function awaitFn(){
    
}

async function awaitfn(){
    const output= await myfunction()  //await will hold the function Untill the line of code exectute
    console.log(output);
}

awaitfn();