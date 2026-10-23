# Práctica 2 · Kit de archivos iniciales (alumnado)

Este ZIP **NO sustituye al proyecto de GitHub de la práctica 1**. Trabajad sobre el repositorio del **gestor de tareas** que ya habéis desarrollado.

1. Cread una nueva rama desde `develop` (consultad el enunciado).
2. Copiad a la **raíz de vuestro repositorio**: `Dockerfile`, `.dockerignore`, `compose.yaml`, `README_DOCKER.md`, `DOCKER_EVIDENCIAS.md` y la carpeta `proxy/`.
3. Completad los elementos marcados `TODO` y revisad por qué se utiliza cada archivo.
4. Comprobad que `index.html` y los recursos de la aplicación se encuentran en la raíz del repositorio. Si vuestra estructura es distinta, **adaptad el `COPY` del Dockerfile**.
5. Seguid el enunciado: contenedores → imagen → volumen → Compose → incidencias.
6. Se entrega **una sola URL de GitHub por equipo** y **una única nota grupal**.

### ¿Y si nuestro gestor de tareas no funciona?

La carpeta `demo_opcional/` contiene una pequeña página web de ejemplo. Puede usarse para probar Docker, pero **no sustituye la aplicación de la práctica 1** salvo indicación del profesor. Si se utiliza como prueba, copiad los archivos de la demo a la raíz de un repositorio de ensayo; `demo_opcional/` está excluida de la imagen final por `.dockerignore`.

### Importante

Los archivos del kit están deliberadamente **incompletos**. En particular, el Dockerfile no copia aún la web y Compose solo incorpora el servicio web. La solución de referencia no está en este ZIP.
