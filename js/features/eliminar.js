import { deleteTarea } from '../store.js';

export function activarEliminar(render) {
  const taskList = document.querySelector('#task-list');

  if (!taskList) return;

  taskList.addEventListener('click', (e) => {
<<<<<<< HEAD
    // 1. Detectar si el clic fue en el botón de eliminar o dentro de él
    const deleteBtn = e.target.closest('[data-action="delete"]');
    
    if (deleteBtn) {
      // 2. Obtener el id del elemento <li> padre
=======
    // 1. Actuar solo si el botón o su objetivo tiene data-action="delete"
    const deleteBtn = e.target.closest('[data-action="delete"]');
    
    if (deleteBtn) {
      // 2. Obtener el id numérico del elemento <li> padre
>>>>>>> 1ea3c06692c256d8808fc9e582a970e508393026
      const li = deleteBtn.closest('li');
      if (li && li.dataset.id) {
        const id = Number(li.dataset.id);
        
<<<<<<< HEAD
        // 3. Eliminar la tarea y volver a renderizar la vista
=======
        // 3. Llamar a deleteTarea(id) y refrescar la vista con render()
>>>>>>> 1ea3c06692c256d8808fc9e582a970e508393026
        deleteTarea(id);
        render();
      }
    }
  });
}