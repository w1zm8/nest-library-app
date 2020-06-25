# Nest Library App

## Installation

```bash
$ npm install
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

## About App

> Application that allows you to CRUD books. Simple implementation of book's catalog with authentication

### App Modules

- BooksModule
- AuthModule

### Endpoints

| Endpoint   | Method Type | Description       |
| ---------- | ----------- | ----------------- |
| /books     | GET         | Get all books     |
| /books/:id | GET         | Get book by id    |
| /books     | POST        | Create a new book |
| /books/:id | DELETE      | Delete a book     |
