DROP DATABASE IF EXISTS potionsales;

CREATE DATABASE potionsales;

USE potionsales;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(500),
  last_name VARCHAR(500),
  email VARCHAR(500),
  street1 VARCHAR(500),
  street2 VARCHAR(500),
  city VARCHAR(500),
  us_state VARCHAR(500),
  zip VARCHAR(500), 
  ccNum VARCHAR(500), 
  exp_date VARCHAR(500), 
  PRIMARY KEY(id)
);

CREATE TABLE transactions (
  id INT NOT NULL AUTO_INCREMENT,
  quantity INT,
  total VARCHAR(500),
  order_date DATE,
  userId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);
