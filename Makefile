install-rest:
	cd ./packages/api && npm install && cd ../..

install-web:
	cd ./packages/web && npm install && cd ../..

install: install-rest install-web

up:
	docker compose up -d --force-recreate 

up-build:
	docker compose up -d --force-recreate --build

down:
	docker compose down

into-api:
	docker compose exec api bash

logs-api:
	docker compose logs -f api

logs-web:
	docker compose logs -f web

logs-nginx:
	docker compose logs -f nginx

logs:
	docker compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .