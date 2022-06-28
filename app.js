require('colors');
const { monstrarMenu } = require('./helpers/mensajes');
console.clear();

const main = async () => {
    console.log('Hola mundo'.green);
    monstrarMenu();
}

main();

