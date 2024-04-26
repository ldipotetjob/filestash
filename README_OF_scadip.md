## Building  Filestash image with CSS modified

### We are in branch "develop"

1. Move to docker directory
2. Create the docker image and start the browser with docker compose

```shell
###################################################
#  In case of cache problems:                     #
#  docker system prune                            #
#  docker volume prune                            #
#  docker build --no-cache -t scadip/filestash .  #
#  docker compose up --force-recreate             #
###################################################

docker build -t scadip/filestash .
docker compose up
```

docker compose down

### How access to the S3 Folder: http://localhost:8334

### How modify CSS

### How re-build front

### Ideas if you want to avoid downloading resources from github while you iterate building the docker images
