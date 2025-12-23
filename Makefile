install:
	npm ci

start:
	npm start

run:
	npm run dev

lint:
	npx eslint --ext js,jsx --config eslint.config.js . --fix

build:
	rm -rf /dist
	npm run build