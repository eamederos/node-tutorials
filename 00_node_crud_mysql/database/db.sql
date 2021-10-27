CREATE DATABASE node_crud;

use node_crud;

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phone VARCHAR(50)
);

SHOW TABLES;

describe customer;