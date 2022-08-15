CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    releas_year INTEGER,
    number_of_pages INTEGER,
    circulation INTEGER
);
