# Simple plain Javascript/Node.js starter for Interviews

This is a *very* simple boilerplate for simple javascript/node.js interview exercises with auto-reloading on save and Jest as test runner. Chai syntax is optional. In this specific boilerplate, I left linting and Babel out on purpose.

I like to have people free to choose their own "starter" boilerplate. But some people have been working for a while on one codebase where the setup and the tooling was done for them.
It is not fair, or at least waste valuable time during the interview, to have people set up things from scratch during interviews. Knowing how to do that is a nice to have. But if people do not know how, it does not mean that are unqualified candidates.

This is a basic uncomplicated setup that enables us to save time and increase productivity.

## Pre-requisites
Install [`nvm`](https://raw.githubusercontent.com/creationix/nvm/master/install.sh) or make sure you are running node 8 or up.
Install [`yarn`] - `npm install -g yarn`

## Installation
```
git clone https://github.com/this-repo my-test-app
cd my-test-app
nvm use
yarn
yarn start
```

## Tests
It uses [Jest](https://facebook.github.io/jest).
All `*.spec.js` files will be consider test files.

## Run tests
Run tests once:

```
$ yarn run test
```

To run tests in watch mode use:
```
$ yarn run test:watch
```

To run test coverage use:
```
$ yarn run cover
```

To see the HTML test coverage results use:
```
$ yarn run cover-report
```

### Chai support
Do you want to use `chai` for tests?
Just check [setup-tests.js](setup-tests.js)
