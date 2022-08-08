up:
	docker-compose up -d --force-recreate 

down:
	docker-compose down

into-rest:
	docker-compose exec rest-service bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .