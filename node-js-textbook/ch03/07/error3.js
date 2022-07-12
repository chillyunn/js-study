const fs = require('fs').promises;


setInterval(()=>{
    fs.unlink('./abcdefgs.js')
},1000);