# Equipo 1
## Bhérring Paucar Bonifacio 
## Ivan Alarcon
## Wanderd Vidal Rios

# NodeJS - REST API with NestJS Framework

## Description

Banking REST API with NestJS

## Nest cli installation

```bash
$ npm install -g @nestjs/cli
$ nest --version
$ nest --help
```

## Global npm packages installation

```bash
$ npm install -g ts-node typeorm
```

## Local npm packages installation

```bash
$ npm install --save @nestjs/typeorm
$ npm install --save typeorm
$ npm install --save mysql moment moment-timezone
```

## Environment variables

```
MYSQL_UNMSM_BANKING_NEST_URL=mysql://{user}:{password}@{host}:{port}/{database}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
