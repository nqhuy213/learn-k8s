up:
	docker compose up -d --force-recreate 

down:
	docker compose down

into-rest:
	docker compose exec rest-service bash

logs-rest:
	docker compose logs -f rest-service

logs-web:
	docker compose logs -f web-app

logs:
	docker compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .