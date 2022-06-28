require ('colors');

const monstrarMenu = () => {
    console.clear();
    console.log('==============================='.green);
    console.log('   Seleccione una opción'.red);
    console.log('===============================\n'.green);
    console.log('1. Crear tarea');
    console.log('2. Listar Tarea');
    console.log('3. Listar tareas completadas');
    console.log('4. Listar tareas pendientes');
    console.log('5. Completar tarea(s)');
    console.log('6. Borrar tarea');
    console.log('0. Salir\n');


  
}

module.exports = {
    monstrarMenu
}