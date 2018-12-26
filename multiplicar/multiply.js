//requires
const fs = require('fs');



let createFile = (base,limite)=>{
    return new Promise((resolve,reject)=>{
        let data = '';
        if( !Number(base) ){
            reject(`Ingrese un numero! => [Input: '${base}']`.red);
            return;
        }
        let path = `tabla-${base}-hasta-${limite}.txt`;
        for(let i = 1;i<=limite;i++){
            data+=`${base} x ${i} = ${base*i} \n`;
        }
        
        fs.writeFile(`files/${path}`,data,err=>{
            if(err) reject(err);
            else
                resolve(path.cyan);
            
        });
    })
}

let listarMult= (base,limite)=>{
    if( !Number(base) ){
        reject(`Ingrese un numero! => [Input: '${base}']`.red);
        return;
    }
        console.log('======================='.green);
        console.log(`▒    Tabla del ${base}     ▒`.green);
        console.log('======================='.green);
        
    for(let i = 1;i<=limite;i++){
        console.log(`      ${base} x ${i} = ${base*i} \n`);
    }
}
module.exports = {
    createFile,
    listarMult
}


