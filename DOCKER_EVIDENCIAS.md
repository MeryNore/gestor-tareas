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
`docker run --rm hello-world`
--rm: Significa remove (eliminar). Es una instrucción de limpieza que le dice a Docker: "En cuanto este contenedor termine su trabajo y se apague, destrúyelo y bórralo para que no deje basura inútil en el sistema".

**¿Qué significa `8081:80`?** TODO  
El puerto `8081` es la puerta de nuestro ordenador físico desde la que entras a la web en tu navegador. El puerto 80 es la puerta interna del contenedor Nginx que recibe nuestra visita para mostrarte la página.

## 2. Nuestra imagen

- [x] Imagen construida con `docker build`.
- [x] Aplicación accesible en `http://localhost:8080`.
- [x] Cambio visual comprobado tras reconstruir y recrear el contenedor.

**Comandos y resultados:** TODO   
`docker build -t gestor-tareas:2.0 .`
Construir la imagen propia del gestor de tareas.

`docker images`
Comprobar que la imagen aparece en el sistema.

`docker run -d --name gestor-tareas -p 127.0.0.1:8080:80 gestor-tareas:2.0`
Arrancar el contenedor individual mapeando el puerto 8080.


**¿Por qué el contenedor antiguo no cambia al reconstruir la imagen?** 
Esto ocurre porque el contenedor antiguo está ejecutando una imagen estática (una "fotografía" del código viejo). Para que el nuevo título aparezca, es necesario volver a "fotografiar" el código reconstruyendo la imagen de nuevo y borrar/recrear el contenedor.

## 3. Persistencia de datos

- [x] Volumen creado.
- [x] Un contenedor escribe un archivo en el volumen.
- [x] Otro contenedor recupera el archivo tras eliminar el primero.

**Comandos y resultado:**    
`docker volume create datos-devops`
Crear el volumen.

`docker run --rm -v datos-devops:/datos alpine:3.24 sh -c "echo datos persistentes > /datos/prueba.txt"`
Escribir el archivo desde un contenedor temporal Alpine.

`docker run --rm -v datos-devops:/datos alpine:3.24 cat /datos/prueba.txt`
Leer el archivo desde otro contenedor distinto (resultado esperado: "datos persistentes").

**¿por qué se conserva el archivo cuando desaparece el primer contenedor?**
Porque el volumen (datos-devops) es como un "disco duro externo" conectado al contenedor. Aunque el contenedor se destruya, el disco duro y la información que hay dentro siguen existiendo en el ordenador anfitrión (tu máquina), listos para conectarse a un contenedor nuevo.

**¿para qué sería útil un volumen en una aplicación con base de datos?**
Para que no se borre toda la información (usuarios, contraseñas, mensajes) si el contenedor de la base de datos se apaga, se reinicia o se actualiza. El volumen garantiza que los datos sean permanentes.

**¿Qué relación tiene esto con las bases de datos?** TODO   
Los volúmenes en Docker permiten que la información almacenada por una base de datos (como tablas, registros o usuarios) resida fuera del contenedor efímero. De este modo, si el contenedor de la base de datos se apaga, se actualiza o se elimina, los datos no se pierden y se conservan intactos para futuras ejecuciones.

## 4. Docker Compose

- [X] Servicios `web` y `proxy` iniciados.
- [X] La aplicación funciona en `http://localhost:8080`.
- [X] Se ha consultado `docker compose ps`.
- [X] Se ha probado la comunicación `proxy` → `web`.

**Comandos y resultado:** 
`docker compose up -d --build` -> Construye y arranca a la vez los dos servicios (`web` y `proxy`) en segundo plano, creando una red interna para que se comuniquen.
`docker compose ps` -> Muestra que los dos contenedores están encendidos y funcionando (`Up`).
`docker compose logs proxy` -> Comprueba en los registros que las visitas que entran por `http://localhost:8080` llegan al proxy y este las redirige correctamente hacia nuestra página `web`.
**¿Por qué el proxy se conecta a `web` por su nombre?** 
Porque Docker Compose crea una red privada solo para estos contenedores y le pone a cada uno como dirección su propio nombre del archivo `compose.yaml` (en este caso, `web`). Así el proxy puede encontrarlo llamándolo simplemente `web`, sin tener que memorizar ni escribir números de red (IPs) que pueden cambiar cada vez que se reinician los contenedores.
## 5. Incidencias

**Incidencia 1 - Puerto ocupado:** qué ocurrió / cómo lo resolvisteis: 
Al intentar arrancar el nuevo sistema con Docker Compose en el puerto `8080`, Docker nos dio un error diciendo que ese puerto ya estaba en uso. Ocurrió porque todavía teníamos encendido el contenedor individual que probamos en el paso anterior ocupando esa misma puerta. Lo resolvimos apagando y borrando ese contenedor antiguo con `docker rm -f gestor-tareas` para dejar libre el puerto `8080`.

**Incidencia 2 - Imagen no actualizada:** qué ocurrió / cómo lo resolvisteis: 
Al cambiar el título de nuestra aplicación en el código y volver a crear la imagen, vimos que al recargar la página seguía saliendo el título viejo. Esto pasó porque el contenedor que estaba encendido seguía usando la imagen antigua que tenía cargada. Lo solucionamos deteniendo y borrando el contenedor viejo (`docker stop` y `docker rm`) y volviendo a crear uno nuevo a partir de la imagen recién actualizada.

**Incidencia 3 - Servicio incorrecto en Nginx:** qué ocurrió / cómo lo resolvisteis: 
Al principio el proxy no lograba conectar con nuestra aplicación web y daba error al cargar la página. Revisamos el archivo de configuración de Nginx (`default.conf`) y vimos que apuntaba a un nombre de destino que no coincidía con el servicio de nuestro `compose.yaml`. Lo arreglamos cambiando el destino en la configuración de Nginx para que apuntara exactamente al nombre `web`.

## 6. Conclusión del equipo

**Dos cosas que hemos aprendido:**
1. **Crear imágenes propias y entender que los contenedores son estáticos:** Hemos aprendido a empaquetar nuestra web con un `Dockerfile` y a comprender que un contenedor en marcha es como una "fotografía" fija; si editamos el código fuente, debemos volver a construir la imagen (`--build`) y recrear el contenedor para ver los cambios.
2. **Orquestar varios contenedores con Docker Compose:** Hemos visto cómo levantar a la vez un servicio `proxy` y nuestra aplicación `web`, haciendo que solo el proxy sea accesible desde nuestro ordenador (`localhost:8080`) y que ambos se comuniquen internamente usando simplemente el nombre del servicio sin depender de direcciones IP.

**Una duda o dificultad que hemos tenido:**
Al principio nos costó entender por qué los cambios en el código o en la configuración de Nginx no se aplicaban al hacer un simple reinicio, además de coordinarnos para actualizar (`git pull`) antes de subir nuestros avances en equipo a la rama `feature/docker`.

## 7. Colaboración

**Enlaces a Pull Requests relevantes:**
