SHELL := /bin/bash
%:
	@echo "Unknown target '$$@' – skipping"
create:
	npx create-next-app@latest $$(basename $$(pwd)) --no-tailwind --no-turbopack --yes
generate:
	cdnpm install
run:
	npm run dev
deploy:
	npm run build