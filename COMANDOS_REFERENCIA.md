# Chuleta de comandos Docker

```bash
docker --version
docker info
docker compose version
docker run --rm hello-world
docker pull nginx:stable-alpine
docker images
docker ps
docker ps -a
docker logs NOMBRE
docker inspect NOMBRE
docker exec -it NOMBRE sh
docker stop NOMBRE
docker start NOMBRE
docker rm NOMBRE
docker build -t gestor-tareas:2.0 .
docker volume create datos-devops
docker volume ls
docker compose config
docker compose up -d --build
docker compose ps
docker compose logs proxy
docker compose stop
docker compose start
docker compose down
```

**PowerShell:** escribid los comandos de varias líneas del enunciado en una sola línea. La barra inversa `\` de Bash no sirve como continuación de línea en PowerShell.
