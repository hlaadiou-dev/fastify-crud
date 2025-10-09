all:	build up

build:
	docker compose build

up:
	docker compose up -d

stop:
	docker compose stop

down:
	docker compose down

reset:
	docker compose down -v

clean: down
	docker system prune --force

fclean: reset
	docker system prune --force --all --volumes

re:	down all