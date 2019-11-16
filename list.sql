DROP DATABASE IF EXISTS restaurant_reservation_list;
CREATE DATABASE restaurant_reservation_list;
USE restaurant_reservation_list;

CREATE TABLE res_list
(
  id int
  AUTO_INCREMENT,
  name VARCHAR
  (255),
  phone VARCHAR
  (255),
  email VARCHAR
  (255),
  uniqueID VARCHAR
  (255) UNIQUE,
  PRIMARY KEY
  (id)

);

  SELECT *
  FROM res_list;