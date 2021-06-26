# Microservice Single Entry API

This is a single entry accounting API template using Test driven development and SOLID princples from Bob Martins clean architecture.

* [This is the Accounting model used in this code.](https://youtu.be/i8RIh04AaD8)
* [The factory functions style of coding I learned from Bill Sourour here.](https://youtu.be/CnailTcJV_U)

## How it works
* This code has three main layers the (financialTransaction) model -> use-cases -> controllers. 
* The use-case is dependant on the data-access layer but the dependancy is inverted where the data-access is an interface to mongodb and it is injected (dependancy injection) to the use-cases layer. This is done to make it easier to change the database and data-access if needed without to much change to the use-cases layer.
* express is used to handle the restful requests.
* jest and mongo-memory-server are used to test each layer.

## Reasoning

This code showcases how I would write backend projects using node.js.

## Running Locally

#### Prerequisites
* [Git](https://git-scm.com/downloads)
* [Node JS](https://nodejs.org/en/)
* [Mongo DB](https://www.mongodb.com) 


#### 1. Clone the repo and install dependencies
```bash
git clone 
cd comments-api
npm i
```
#### 2. Startup your MongoDB
Usually this is just: `mongod` on the command line.

#### 4. Start the server
To run in production mode:
```bash
npm start
```

To run in development mode:
```bash
npm run dev
```