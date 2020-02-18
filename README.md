# react-boilerplate
This is a react-boilerplate created for personal learning

It includes some dummy components to help you get started and understand the boilerplate structure.

## What it includes
- [x] Apollo
  > A platform for building a data graph
- [x] Jest
  > Task runner for doing tests
- [x] React-testing-library
  > Library to test react component
- [x] React-emotion
  > Easy CSS in JS solution, no more worrying about DOM elements being loaded before CSS
- [x] Webpack-dev-server + react-hot-loader
  > Development server with hot reload capabilities
- [x] Eslint rules and prettier rules
  > Highly opinionated rules (from work experiences and my personal preferences)
- [x] React router (v5)
  > The defacto routing solution for react app
- [x] Component based code splitting
  > Load js for components only when they are needed, reduce main bundle size
- [x] Some webpack bundle optimizations

## What's next
- [x] Use koa instead of express
- [x] Enable source map for dev
- [ ] Setup import resolvers
- [x] Change Enzyme to react-testing-library
- [x] Remove redux, replace it with a GlobalContext with hooks!
- [x] Change webpack-serve to webpack-dev-server
- [ ] Upgrade to react-emotion@10
- [x] SSR
- [ ] Containerize using docker for easy installation

## Commands
| Commands            | Purpose                                                        |
|---------------------|----------------------------------------------------------------|
| yarn                | install dependencies                                           |
| yarn stats          | run webpack-bundle-analyzer                                    |
| yarn build:client   | to build optimized bundle                                      |
| yarn build:server   | to build optimized server bundle                               |
| yarn dev:server     | to start development server for the server renderer            |
| yarn dev:client     | run webpack-dev-server with hot reload enabled for development |
| yarn test:client    | run unit test for client side codes only											 |
| yarn test:server    | run unit test for server side codes only											 |
| yarn test     			| run unit test for both client and server side codes						 |
| yarn test:coverage  | run unit test for both client and server side codes with coverage report |


## Stack
- React
- Koa
- Emotion
- @loadable/component
- React Router
- Apollo
