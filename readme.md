# react playground.

## to start development server:
- to install dependencies: run `yarn`
- to start webpack-dev-server: `yarn start`
- go to `http://localhost:8080/`

## to build app:
- to install dependencies: run `yarn`
- to start webpack-dev-server: `yarn build`

## to serve the app:
- webpack will create a `dist` folder.
- run `cd dist` from root folder
- serve `dist` folder with any http server: run in terminal `httpster`
  - (To install `httpster` run `yarn global add httpster`)
- In the browser go to `http://localhost:<port number>` (where `<port number>` is the number defined by http server)

## to run the tests:
- in the terminal run `yarn run test`

## todo:
- [x] add react routes to index each code snippet https://reacttraining.com/react-router/web/guides/quick-start
- [ ] add code snippets using react-hooks