import { addTarea } from "../store.js";

export function activarAnadir(render) {

  const form = document.querySelector('#task-form');
  const input = document.querySelector('#task-input');

  form.addEventListener('submit', function (event) {
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
