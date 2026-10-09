import { addTarea } from "../store.js";

export function activarAnadir(render) {
  // TODO feature/anadir-tarea
  // 1. Escuchar el evento submit del formulario #task-form.
  // 2. Leer y limpiar (trim) el valor de #task-input.
  // 3. No permitir tareas vacías.
  // 4. Llamar a addTarea(texto).
  // 5. Vaciar el input y llamar a render().

  const form = document.querySelector('#task-form');
  const input = document.querySelector('#task-input');

  form.addEventListener('submit', function(event) {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault(); 

    // Lee el texto y elimina los espacios en blanco de los extremos
    const texto = input.value.trim();

    // Solo ejecuta la acción si el texto no está vacío
    if (texto !== '') {
      addTarea(texto);
      input.value = ''; // Vacía el campo de texto
      render();         // Actualiza la interfaz
    }
  });
}
