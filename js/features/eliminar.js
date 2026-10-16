import { deleteTarea } from '../store.js';

export function activarEliminar(render) {
<<<<<<< HEAD
  // TODO feature/eliminar-tarea
  // 1. Escuchar clics en #task-list usando delegación de eventos.
  // 2. Comprobar que el botón tenga data-action="delete".
  // 3. Obtener el id numérico del <li data-id="...">.
  // 4. Llamar a deleteTarea(id) y después a render().
}
=======
  const taskList = document.querySelector('#task-list');

  if (!taskList) return;

  taskList.addEventListener('click', (e) => {
    // 1. Detectar si el clic fue en el botón de eliminar o dentro de él
    const deleteBtn = e.target.closest('[data-action="delete"]');
    
    if (deleteBtn) {
      // 2. Obtener el id del elemento <li> padre
      const li = deleteBtn.closest('li');
      if (li && li.dataset.id) {
        const id = Number(li.dataset.id);
        
        // 3. Eliminar la tarea y volver a renderizar la vista
        deleteTarea(id);
        render();
      }
    }
  });
}
>>>>>>> origin/develop
