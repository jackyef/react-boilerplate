# React-Boilerplate
This is a react-boilerplate created for personal learning

It includes some dummy components to help you get started and understand the boilerplate structure.

Currently the bundles size are as follow:
- vendors.js (94.95 KB gzipped)
- client.js (2.59 KB gzipped)
- other chunks from code splitting (<1 KB gzipped) (this will increase as your components get more complex)

## What it includes
- [x] Jest
  Task runner for doing tests
- [x] Enzyme
  Library to test react component
- [x] React-emotion
  Easy CSS in JS solution, no more worrying about DOM elements being loaded before CSS
- [x] webpack-serve + react-hot-loader
  Development server with hot reload capabilities
- [x] eslint rules and prettier rules
  Highly opinionated rules (from work experiences and my personal preferences)
- [x] Redux
  Just in case the web-app would need one
- [x] React router (v4)
  One of the essentials, connected to redux via connected-react-router
- [x] component based code splitting 
  Load js for components only when they are needed, reduce main bundle size
- [x] Some webpack bundle optimizations 


## What's next
- [ ] SSR capability
- [ ] Hot reload server

## Setup
yarn
yarn stats      // run webpack-bundle-analyzer
yarn build:prod // to build optimized bundle
yarn start      // to start server
yarn dev        // run webpack-serve with hot reload enabled for development

 