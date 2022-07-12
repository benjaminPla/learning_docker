# Learning Docker

## benjaminpla/learning_docker
```
docker pull benjaminpla/learning_docker
```

### Files
**.dockerignore**  
```
node_modules
npm-debug.log
```
**Dockerfile**
```
FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["npm", "start"]
```

### Commands
| Command | Description |
| ----------- | ----------- |
| docker build -t {name} . | build |
| docker images | show images |
| docker rmi {selector}| remove image |
| docker run -p {port:port} {selector}| run |
| docker ps _-a_| show containers |
| docker start {selector}| start |
| docker stop {selector}| stop |
| docker push | push |
| docker pull | pull |
| docker tag | tag |
| docker commit | commit |
| docker volume ls | show volumes |
| docker volume prune | prune volumes |
| docker-compose up _-f -d --build_ | docker-compose |
| docker-compose down _-v_ | docker-compose |
