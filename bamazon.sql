DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,4)NOT NULL,
  stock_quantity INTEGER(10)NOT NULL,
  PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity);
VALUES('Memento', 'Video', 15.99, 50),
('Fight Club', 'Video', 15.99, 50),
('Pop Corn', 'Food', 1.99, 50),
('Chocolate', 'Food', 1.99, 50),
('Coca Cola', 'Drinks', 1.99, 50),
('Orange Juice', 'Drinks', 1.99, 50),
('Mario Kart', 'Video Games', 49.99, 20),
('Mario Odisse', 'Video Games', 60.99, 10),
('Jpod', 'Books', 5.99, 30),
('Punk Land', 'Book', 6.99, 20);

SELECT * FROM products;




