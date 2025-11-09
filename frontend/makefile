%:
	@echo "Unknown target '$@' skipping"
create:
	@echo npx create-next-app@latest frontend
	@echo 竏・Would you like to use TypeScript? ... No / Yes
	@echo 竏・Would you like to use ESLint? ... No / Yes
	@echo 竏・Would you like to use Tailwind CSS? ... No / Yes
	@echo 竏・Would you like your code inside a `src/` directory? ... No / Yes
	@echo 竏・Would you like to use App Router? (recommended) ... No / Yes
	@echo 竏・Would you like to use Turbopack for `next dev`? ... No / Yes
	@echo 竏・Would you like to customize the import alias (`@/*` by default)? ... No / Yes
generate:
	npm install
run:
	npm run dev
deploy:
	npm run build
clean:
	rm -rf node_modules package-lock.json .next
	npm cache clean --force