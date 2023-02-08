# Api planner

The planner's API aims to help the client to organize his week and his tasks and at what times they happen, this will happen through user routes and events that will be requested through http GET, POST, PUT and DELETE methods.

[Deploy]()

## Info

<p align="center">
   <img src="http://img.shields.io/static/v1?label=Node&message=18.12.1&color=green&style=for-the-badge&logo=node.js"/>
   <img src="http://img.shields.io/static/v1?label=MongoDB&message=6.0.2&color=green&style=for-the-badge&logo=mongodb"/>
   <img src="http://img.shields.io/static/v1?label=express&message=4.18.2&color=blue&style=for-the-badge&logo=express"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=green&style=for-the-badge"/>
</p>

## Installing with npm

Install dependencies of api-planner with npm

```bash
  npm install
```

## Environment variables

To run this project, you will need to add the following environment variables to your .env

`DATABASE_URL=mongodb+srv://<host>:password@cluster0.qhthcyc.mongodb.net/planner?retryWrites=true&w=majority`

`DATABASE_PASSWORD=<password>`

You will need to replace the <host> and <password>

## Summary

[Resources](##resources)

[Running Locally](#running-locally)

[Requirements](#requirements)

[Postman](#postman)

[Routes](#routes)

[License](#license)

## Resources

-   Node.JS v.18.12.1
-   MongoDB v.6.0.2
-   Dependencies:
    -   bcrypt v5.1.0,
    -   express v4.18.2,
    -   joi v17.7.0,
    -   lodash v4.17.21,
    -   moment v2.29.4,
    -   mongoose v6.9.0
-   Development dependencies:
    -   dotenv v16.0.",
    -   nodemon v2.0.20

## Running Locally

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install the dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Requirements

[Node.js](https://nodejs.org/en/)

[MongoDB](https://www.mongodb.com/pt-br)

## Postman

Detailed documentation of each api route

[Documentation](https://documenter.getpostman.com/view/23892928/2s935rJ2iG)

obs: Run Postman locally for more efficiency

## Routes

1. events
    - POST http://localhost:3000/api/v1/events
    - GET http://localhost:3000/api/v1/events
    - DELETE http://localhost:3000/api/v1/events/:id
    - GET http://localhost:3000/api/v1/events/:id
    - GET http://localhost:3000/api/v1/events?dayOfTheWeek=**\***
    - PUT http://localhost:3000/api/v1/events/:id
    - DELETE http://localhost:3000/api/v1/events?dayOfTheWeek=**\***
2. users
    - POST http://localhost:3000/api/v1/users/signUp
    - POST http://localhost:3000/api/v1/users/signIn
    - PUT http://localhost:3000/api/v1/users/:id

Copyright :copyright: 2023 - 2° Projeto Compass
