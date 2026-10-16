import { setFiltro } from "../store.js";

export function activarFiltro(render) {
  const filtro = document.querySelector("#filter");

  filtro.addEventListener("change", () => {
    setFiltro(filtro.value);
    render();
  });
}
import { setFiltro } from "../store.js";
