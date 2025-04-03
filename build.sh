#!/usr/bin/env bash

set -ex

docker compose -f docker-compose.local.yml -f docker-compose.yml build
docker compose up -d

echo "done"
