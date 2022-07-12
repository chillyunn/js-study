setInterval(()=>{
    console.log('start');
    try{
        throw new Error('brake server');
    } catch(err){
        console.error(err);
    }
},1000)