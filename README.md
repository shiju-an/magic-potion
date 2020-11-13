# Magic Potion Take Home

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Database Overview](#database-overview)
  * [Type Selection](#type-selection)
  * [Schema](#schema)
* [Front End Architecture](#front-end-architecture)
* [API Architecture](#api-architecture)
* [Known Issues](#known-issues)
* [Roadmap](#roadmap)


## About the Project
A single page web application to order magic potions -- limited to three units per month per customer. 

### Built With
* [MySql - ClearDB](https://www.cleardb.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.JS](https://nodejs.org/en/)
* Deployed on [Heroku](https://heroku.com/)

## To view deployed application, visit: 
https://joanna-wang-magic-potion.herokuapp.com/
# Note the below:
```sh
* Phone number input must be 10 digits.
* Zip code input must be 5 digits.
* Credit card number input must be 16 digits (no spaces) and a "valid" number. For ease, use 4111111111111111 
```

## Getting Started
### Installing Dependencies
From within the root directory:
```sh
npm install
```

### Once Dependencies Installed
From within the root directory:
* Go to /db/index.js and follow instructions in comments
* Go to /db/schema.sql and follow instructions in comments
*  Create mysql tables
```sh
npm run create-tables
```
*  Build react app with script:
```sh
npm run build
```
*  Run server:
```sh
npm run server-dev
```
*  Go to url http://localhost:3000/ to view app

## Database Overview
### Type Selection
Choosing the type of database was due to the following reasons: 
1. One to many relationship between users and transactions 
2. Support for ACID transactions
3. Ability to scale and create more relationships between tables if application features increase 

### Schema
The schema is split into two tables:
1. User 
* The user table holds all users' personal information based on form input (i.e, contact, address, payment information) with a unique id per user. 
2. Transactions
* The transactions table holds all transactions made, with a unique id per transaction and a foreign key that references the unique user id. 

This split is so that users can have many transactions over time, but each user is unique and will not be able to sign up more than once.
(Currently, the uniqueness of a user is determined by their full name, phone, and email (contact info)). 

## Front End Architecture
The front end architecture was created with a simple, smooth user flow that utilizes conditional rendering and client-side validation in mind.
The design flow is: 
Product Page <--> Contact Form <--> Shipping Form <--> Payment Form --> POST TO SERVER

Form input is kept in the state, so that the data can be passed down to API requests. Validation state (true/false) is also kept in the state, so that they can be toggled if input is changed.

From the product to POST request, each form will need to be validated before a NEXT button allows user to continue to the proceeding page. User has the option to also go back to a previous form to change their input, but the input will need to be validated again. Once all forms have been filled out and validated, only then is the SUBMIT button enabled. 

If the user input does not pass the validation tests, currently the user is notified through the Window alert() method. Because the form inputs are validated onBlur (when the object (form input) loses focus), each error alert is unique to the form input. 

## API Architecture
All basic CRUD operations can be handled by the application. However, the application currently utilizes only the POST request. 

POST user input (transaction, total, contact, shipping, payment forms) to DB
# POST /api/magic
Once form inputs are validated on the client-side and before saving to the DB, the DB query validates the below:
1. If user does not exist, proceed to save a new user and the incoming transaction. 
2. If user does exists, check in database whether user's transactions will exceed the maximum of 3 potions per month. 
3. If user exists and user's transactions do not exceed the maximum, save only the incoming transaction. 
4. If user exists and user's transactions exceed the maximum, send a 'cannot exceed maximum orders per month' error to client. 

GET user data and transaction data for a specific transaction ID. 
# GET /api/magic/:id 

PATCH/update a fufilled column for a specific transaction ID. 
# PATCH /api/magic/:id

DELETE a specific transaction by its ID but keep the user 
# DELETE /api/magic/:id

## Known Issues
* Client-side validation functions are called on the onBlur event handler - this means that certain cases such as auto fill, etc will not be automatically recognized as valid inputs.
* Client-side validation does not validate: email, address, city. 
* ClearDB auto-increments unique indexes by 10. If attempt to GET/PATCH/DELETE a transaction with an ID that does not exist, the deployed Heroku application will lose connection. 
* Front-end design is not responsive. 

## Roadmap
* As client side validation is more for user, optimize for server side validation for security.
* Optimize POST database queries (from callbacks to promises) 
* Responsive design
* Better display of alerts for user
* Optimize state - use some form of state management (Redux) 
