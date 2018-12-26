const {argv} = require('./config/yargs');
const {createFile,listarMult} = require('./multiplicar/multiply');
const colors = require('colors');
//Lo de la linea de arriba se llama destructuracion.

//let base = '5';
let comando =argv._[0];
switch(comando){
        case 'crear':
        createFile(argv.base,argv.limite)
        .then(file=> console.log(`File saved: ${file}`))
        .catch(err=>console.log(err));
        break;

        case 'listar':
            listarMult(argv.base,argv.limite);
         break;

        default:
        console.log('Unknown command!');
        break;
}
let argv2 = process.argv.slice(2);
//console.log(argv);
//let param = argv[2];
// let base = argv.split('=')[1];

    

