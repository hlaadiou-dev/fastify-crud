all:	build up

build:
	docker compose build
up:
	docker compose up -d
stop:
	docker compose stop
down:
	docker compose down
clean:
	docker system prune --force
fclean:
	docker system prune --force --all --volumes

re:	fclean all
