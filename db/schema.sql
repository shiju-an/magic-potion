DROP DATABASE IF EXISTS potionsales;

CREATE DATABASE potionsales;

USE potionsales;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  street1 VARCHAR,
  street2 VARCHAR,
  city VARCHAR,
  us_state VARCHAR,
  zip VARCHAR, 
  cc_num VARCHAR, 
  exp_date VARCHAR, 
  PRIMARY KEY(id)
);

CREATE TABLE transactions (
  id INT NOT NULL AUTO_INCREMENT,
  quantity INT,
  total VARCHAR,
  order_date DATE,
  userId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);
