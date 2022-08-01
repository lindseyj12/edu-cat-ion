DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
  id INT NOT NULL,
  title VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT,
  review_id INT,
  review_details TEXT,
  FOREIGN KEY (movie_id)
  REFERENCES movies(id)
  ON DELETE SET NULL
);
