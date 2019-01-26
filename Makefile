serve:
	lektor serve -h 0.0.0.0 -p 8000

staticfiles:
	node_modules/.bin/babel-node build-tools/devbuild.js

dev:
	make -j2 serve staticfiles

compile:
	lektor build -O build && node_modules/.bin/babel-node build-tools/build.js

deploy:
	make compile && gh-pages -d build
