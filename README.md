# Wongames API

This is the API for the [Advanced React Course](https://reactavancado.com.br/) project: a game e-commerce with NextJS, Strapi and GraphQL.

##Requirements 

This project uses [PostgreSQL](https://www.postgresql.org/), and you can install it in your local machine or use Docker. The Database configuration can be found [here](https://github.com/danielacb/course_wongames-api/blob/main/config/database.js).

##Development

Clone this project and install the dependencies:
```
yarn install
```

Then run the development server:
```
yarn develop
```
Now you can access the following urls:
- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

## Populate data

This project uses a `/games/populate` route in order to populate the data via GoG site.
In order to make it work, follow the steps:

- Go to Roles & Permissions > Public and make sure `game:populate` route is public available and the upload as well
- With Strapi running run the following comand in your console:

```bash
$ curl -X POST http://localhost:1337/games/populate
# you can pass query parameters like:
$ curl -X POST http://localhost:1337/games/populate?page=2
$ curl -X POST http://localhost:1337/games/populate?search=simcity
$ curl -X POST http://localhost:1337/games/populate?sort=rating&price=free
$ curl -X POST http://localhost:1337/games/populate?availability=coming&sort=popularity
```
