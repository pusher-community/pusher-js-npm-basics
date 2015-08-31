# Pusher NPM Browserify & webpack basics

[Browserify](http://browserify.org/) and [webpack](http://webpack.github.io/) rock! They're a core part of modern front-end web application development.

This repo contains a **very simple** example of using [pusher-js from NPM](https://www.npmjs.com/package/pusher-js) with both Browserify and webpack.

## Get the code

```
git clone git@github.com:pusher/pusher-js-npm-basics.git
cd pusher-js-npm-basics
```

## Install pusher-js from NPM

```
npm install
```

## To test Browserify

Run

```
browserify src/app.js > dist/browserify-bundle.js
```

Spin up a local server, navigate to `browserify-index.html` and ensure things are working by checking the JavaScript console.

## To test webpack

Run

```
webpack src/app.js dist/webpack-bundle.js
```

Spin up a local server, navigate to `webpack-index.html` and ensure things are working by checking the JavaScript console.
