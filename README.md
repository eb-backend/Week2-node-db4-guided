# Node DB 4 Guided Project

## TAKE AWAYS
* There are 3 different types of relationships
  * Many to many -> farm can have many different types of animals, and different types of animals can live in different farms, orders can have diffeent products, and products can be in many different orders
  * One to to one relationship
  * One to many  -> farm can have many farmers, rental cars and driver , author -> blog posts

* the point is to avoid redundancies
* used `PRAGMA foreign_keys = ON` to turn on foreign keys
* sql lite automatically prevent data anomoly by cutting with foreign key when it became invalid, (reference option)

Guided project for **Node DB 4** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] **import** and clone this repository.
- [ ] **CD into the folder** where you cloned **your version**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor uses Knex migrations and seeding to create a multi-table database schema.
