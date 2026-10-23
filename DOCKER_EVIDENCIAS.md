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

**¿Por qué el contenedor antiguo no cambia al reconstruir la imagen?** 
Porque los contenedores son estáticos e isolados; una vez creados a partir de una imagen, no se actualizan solos si modificas el código fuente en tu ordenador.

## 3. Persistencia de datos

- [ ] Volumen creado.
- [ ] Un contenedor escribe un archivo en el volumen.
- [ ] Otro contenedor recupera el archivo tras eliminar el primero.

**Comandos y resultado:** TODO

**¿Qué relación tiene esto con las bases de datos?** TODO

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
