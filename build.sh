#!/usr/bin/env bash

set -ex

# docker compose -f docker-compose.local.yml -f docker-compose.yml build
# docker compose up -d

docker buildx build --push --tag 192.168.10.61:5000/pingvin-share:latest --platform linux/amd64 .

echo "done"
