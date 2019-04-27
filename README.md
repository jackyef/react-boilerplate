# React-Boilerplate
This is a react-boilerplate created for personal learning

It includes some dummy components to help you get started and understand the boilerplate structure.

Currently the bundles size are as follow:
- vendors.js (94.95 KB gzipped)
- client.js (2.59 KB gzipped)
- other chunks from code splitting (<1 KB gzipped) (this will increase as your components get more complex)

## What it includes
- [x] Jest
  > Task runner for doing tests
- [x] Enzyme
  > Library to test react component
- [x] React-emotion
  > Easy CSS in JS solution, no more worrying about DOM elements being loaded before CSS
- [x] webpack-dev-server + react-hot-loader
  > Development server with hot reload capabilities
- [x] eslint rules and prettier rules
  > Highly opinionated rules (from work experiences and my personal preferences)
- [x] React router (v4)
  > The defacto routing solution for react app
- [x] component based code splitting 
  > Load js for components only when they are needed, reduce main bundle size
- [x] Some webpack bundle optimizations 

## What's next
- [x] Use koa instead of express
- [x] Enable source map for dev
- [ ] Setup import resolvers
- [ ] Change Enzyme to react-testing-library
- [x] Remove redux, replace it with a GlobalContext with hooks!
- [x] Change webpack-serve to webpack-dev-server
- [ ] Upgrade to react-emotion@10
- [ ] SSR capability (renderer service)
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
