require ('colors');

const monstrarMenu = () => {
    console.clear();
    console.log('==============================='.green);
    console.log('   Seleccione una opción'.red);
    console.log('===============================\n'.green);
    console.log('1. Crear tarea'.red);
    console.log('2. Listar Tarea'.red);
    console.log('3. Listar tareas completadas'.red);
    console.log('4. Listar tareas pendientes'.red);
    console.log('5. Completar tarea(s)'.red);
    console.log('6. Borrar tarea'.red);
    console.log('0. Salir\n'.red);


  
}

module.exports = {
    monstrarMenu
}