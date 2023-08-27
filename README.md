# Desafio Nginx com NodeJS

O desafio consiste em ter um container com NGINX funcionando como proxy reverso para o container com nodejs. O Nodejs por sua vez faz uma requisição 
ao container com MySQL.

## Imagem

Nome da imagem é: alcantaraafonso/nginx-node:prod
- https://hub.docker.com/repository/docker/alcantaraafonso/nginx-node/general

## Build
docker-compose up -d --build

## Run
docker-compose up -d

## Porta
A porta exposta pela imgem é: 8080

## Execução
O resultado pode ser obtido da seguinte forma:
No browser, digite: http://localhost:8080

O retorno é FullCycle Rocks!!
Lista de nomes