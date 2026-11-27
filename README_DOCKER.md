# Despliegue Docker del gestor de tareas

**Equipo:** TODO
**Integrantes:** 
Rocio Caño, Melisa Moreno, Mª Paz Noreña, Marta del Olmo
**Repositorio de GitHub:** 
https://github.com/MeryNore/gestor-tareas.git

## Requisitos

- TODO: requisitos necesarios en el ordenador.
- Tener instalado **Docker** y **Docker Compose** en el ordenador.
- Git para clonar el repositorio.
- No tener ocupados los puertos `8080` en la máquina local.

## Ejecutar la aplicación

```bash
# TODO: comando para construir e iniciar los servicios
```
docker compose up -d --build

**URL de acceso:** TODO
http://localhost:8080

## Detener y eliminar los contenedores

```bash
# TODO: comando
```
docker compose down
## Arquitectura

- **web**: Contenedor basado en Nginx (nginx:stable-alpine) que aloja los archivos estáticos del gestor de tareas (HTML, CSS y JavaScript). No expone puertos hacia el exterior.
- **proxy**: Servidor Nginx que actúa como proxy inverso. Es el único servicio que expone el puerto 80 del contenedor hacia el puerto 8080 de la máquina local (127.0.0.1:8080:80).
- **Comunicación entre servicios**: Ambos servicios se comunican internamente a través de una red que Docker Compose crea de forma automática. El proxy redirige las peticiones directamente al servicio web utilizando su nombre interno (http://web:80/).

## Posibles problemas

Escribid brevemente un error encontrado y cómo lo habéis solucionado.
