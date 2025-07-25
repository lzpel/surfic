MAKEDIRS := frontend 
SHELL := bash
create:
	bash -c "$${create}"
generate:
	bash -c "$${make_dirs}"
run:
	parallel=1 bash -c "$${make_dirs}"
deploy:
	bash -c "$${make_dirs}"
clean:
	bash -c "$${make_dirs}"
search-%:
	@git grep --color -r --text -n '$*' .
define make_dirs
if [ -n "$$parallel" ]; then
	trap "kill 0" EXIT; for d in $(MAKEDIRS); do $(MAKE) -C "$$d" "$@" & done; wait
else
	time echo $(MAKEDIRS) | xargs -n 1 | xargs -IX sh -c "$(MAKE) -C X $@ || exit 255"
fi
endef
export make_dirs
define create
install -D /dev/stdin ./.gitignore <<'EOF'
out/
target/
EOF
install -D /dev/stdin ./frontend/makefile <<'EOF'
%:
	@echo "Unknown target '$$@' skipping"
create:
	@echo npx create-next-app@latest frontend
	@echo √ Would you like to use TypeScript? ... No / Yes
	@echo √ Would you like to use ESLint? ... No / Yes
	@echo √ Would you like to use Tailwind CSS? ... No / Yes
	@echo √ Would you like your code inside a `src/` directory? ... No / Yes
	@echo √ Would you like to use App Router? (recommended) ... No / Yes
	@echo √ Would you like to use Turbopack for `next dev`? ... No / Yes
	@echo √ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
generate:
	npm install
run:
	npm run dev
deploy:
	npm run build
clean:
	npm cache clean --force
EOF
endef
export create