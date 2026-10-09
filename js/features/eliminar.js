import { deleteTarea } from "../store.js";

export function activarEliminar(render) {
  // TODO feature/eliminar-tarea
  // 1. Escuchar clics en #task-list usando delegación de eventos.


 
  const taskList = document.querySelector('#task-list');

  if (!taskList) return;

  taskList.addEventListener('click', (e) => {
    // 1. Actuar solo si el botón o su objetivo tiene data-action="delete"
    const deleteBtn = e.target.closest('[data-action="delete"]');
    
    if (deleteBtn) {
      // 2. Obtener el id numérico del elemento <li> padre
      const li = deleteBtn.closest('li');
      if (li && li.dataset.id) {
        const id = Number(li.dataset.id);
        
        // 3. Llamar a deleteTarea(id) y refrescar la vista con render()
        deleteTarea(id);
        render();
      }
    }
  });
}