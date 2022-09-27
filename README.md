# Trade3 web-app

[![CI](https://github.com/wpalombini/trade3-web-app/actions/workflows/ci.yml/badge.svg)](https://github.com/wpalombini/trade3-web-app/actions/workflows/ci.yml)

## Install packages

```
npm install
```

## Run smart contract tests

```
npx hardhat test
```

## Run Hardhat and deploy smart contract

```
npx hardhat node
```

On another terminal:

```
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

## Running the web app

```
npm install
npm start
```

## Tools

Prettier, eslint, husky
