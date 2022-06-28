require('colors');
const { monstrarMenu, pausa } = require('./helpers/mensajes');
console.clear();

const main = async () => {
    console.log('Hola mundo'.green);
    monstrarMenu();
    pausa();
}

main();

