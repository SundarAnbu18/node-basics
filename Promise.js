const prom=val=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(val+10)
    },1000);
})

const prom1=new Promise((resolve,reject)=>{
    setInterval(()=>{
        reject('Success');
        
    },1000)
})

Promise.allSettled([prom,prom1]).then(console.log).catch(console.log)
