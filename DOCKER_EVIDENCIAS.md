# Evidencias grupales · Práctica 2 Docker

**Equipo:** 
**Integrantes:** Rocio Caño, Marta del Olmo, Melisa Moreno, Mª Paz Noreña 
**Fecha:** 23/10/26

> No hace falta una captura por comando. Bastan resultados breves y explicaciones comprensibles. Las evidencias son del **equipo**.

## 1. Primeros contenedores

- [x] `docker --version` / `docker compose version` comprobados.
- [x] `hello-world` ejecutado.
- [x] Nginx accesible en `http://localhost:8081`.
- [x] Se ha detenido, iniciado y eliminado el contenedor.

**Comandos utilizados y resultado:** TODO

**¿Qué significa `8081:80`?** TODO

## 2. Nuestra imagen

- [x] Imagen construida con `docker build`.
- [x] Aplicación accesible en `http://localhost:8080`.
- [x] Cambio visual comprobado tras reconstruir y recrear el contenedor.

**Comandos y resultados:** TODO
```bash
# Construir la imagen propia del gestor de tareas
docker build -t gestor-tareas:2.0 .

# Comprobar que la imagen aparece en el sistema
docker images

# Arrancar el contenedor individual mapeando el puerto 8080
docker run -d --name gestor-tareas -p 127.0.0.1:8080:80 gestor-tareas:2.0

**¿Por qué el contenedor antiguo no cambia al reconstruir la imagen?** 
Porque los contenedores son estáticos e isolados; una vez creados a partir de una imagen, no se actualizan solos si modificas el código fuente en tu ordenador.

## 3. Persistencia de datos

- [x] Volumen creado.
- [x] Un contenedor escribe un archivo en el volumen.
- [x] Otro contenedor recupera el archivo tras eliminar el primero.

**Comandos y resultado:** TODO
# Crear el volumen
docker volume create datos-devops

# Escribir el archivo desde un contenedor temporal Alpine
docker run --rm -v datos-devops:/datos alpine:3.24 sh -c "echo datos persistentes > /datos/prueba.txt"

# Leer el archivo desde otro contenedor distinto (resultado esperado: "datos persistentes")
docker run --rm -v datos-devops:/datos alpine:3.24 cat /datos/prueba.txt

**¿Qué relación tiene esto con las bases de datos?** TODO
Los volúmenes en Docker permiten que la información almacenada por una base de datos (como tablas, registros o usuarios) resida fuera del contenedor efímero. De este modo, si el contenedor de la base de datos se apaga, se actualiza o se elimina, los datos no se pierden y se conservan intactos para futuras ejecuciones.
## 4. Docker Compose

- [ ] Servicios `web` y `proxy` iniciados.
- [ ] La aplicación funciona en `http://localhost:8080`.
- [ ] Se ha consultado `docker compose ps`.
- [ ] Se ha probado la comunicación `proxy` → `web`.

**Comandos y resultado:** TODO

**¿Por qué el proxy se conecta a `web` por su nombre?** TODO

## 5. Incidencias

**Incidencia 1 - Puerto ocupado:** qué ocurrió / cómo lo resolvisteis: TODO

**Incidencia 2 - Imagen no actualizada:** qué ocurrió / cómo lo resolvisteis: TODO

**Incidencia 3 - Servicio incorrecto en Nginx:** qué ocurrió / cómo lo resolvisteis: TODO

## 6. Conclusión del equipo

**Dos cosas que hemos aprendido:** TODO

**Una duda o dificultad que hemos tenido:** TODO

## 7. Colaboración

**Enlaces a Pull Requests relevantes:** TODO
