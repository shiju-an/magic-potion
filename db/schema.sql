DROP DATABASE IF EXISTS heroku_e98030fc61e2c0f;

CREATE DATABASE heroku_e98030fc61e2c0f;

USE heroku_e98030fc61e2c0f;

-- FOR DEVELOPMENT, COMMENT THE ABOVE AND UNCOMMENT THE BELOW: --
  
-- DROP DATABASE IF EXISTS potionsales;

-- CREATE DATABASE potionsales;

-- USE potionsales;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(500),
  last_name VARCHAR(500),
  email VARCHAR(500),
  phone VARCHAR(500),
  street1 VARCHAR(500),
  street2 VARCHAR(500),
  city VARCHAR(500),
  us_state VARCHAR(500),
  zip VARCHAR(500), 
  cc_num VARCHAR(500), 
  exp_date VARCHAR(500), 
  PRIMARY KEY(id)
);

CREATE TABLE transactions (
  id INT NOT NULL AUTO_INCREMENT,
  quantity INT,
  total VARCHAR(500),
  order_date DATE, 
  fulfilled BOOLEAN,
  userId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);
