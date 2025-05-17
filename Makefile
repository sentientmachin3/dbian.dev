.PHONY: help
help: ## Shows this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: ## Build the backend docker compose
	docker-compose build

.PHONY: upd
upd: ## Start the compose project
	docker-compose up -d

.PHONY: tsc
tsc: ## Start the compose project
	npx tsc

.PHONY: logs
logs: ## Show logs of the docker compose image
	docker-compose -f docker-compose.yml logs -f

.PHONY: restart
restart: ## Restart the compose project
	docker-compose -f docker-compose.yml restart

.PHONY: stop
stop: ## Stop all containers
	docker-compose -f docker-compose.yml stop

.PHONY: down
down: ## Drop all containers
	docker-compose -f docker-compose.yml down

.PHONY: lint
lint: ## Run linter on the codebase
	cd web && pnpm exec eslint ./src && cd ..

.PHONY: rebuild
rebuild:
	docker compose down && docker compose build && docker compose up -d

