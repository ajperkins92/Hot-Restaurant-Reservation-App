DROP DATABASE IF EXISTS restaurant_reservation_list;
CREATE DATABASE restaurant_reservation_list;
USE restaurant_reservation_list;

CREATE TABLE res_list
(
  id int
  AUTO_INCREMENT,
  customerName VARCHAR
  (255),
  phoneNumber VARCHAR
  (255),
  customerEmail VARCHAR
  (255),
  customerID VARCHAR
  (255) UNIQUE,
  PRIMARY KEY
  (id)

);

  SELECT *
  FROM res_list;