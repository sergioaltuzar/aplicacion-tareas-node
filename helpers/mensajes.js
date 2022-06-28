require ('colors');

const monstrarMenu = () => {
    console.clear();
    console.log('==============================='.green);
    console.log('   Seleccione una opción'.red);
    console.log('===============================\n'.green);
    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar Tarea`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`);


  
}

module.exports = {
    monstrarMenu
}