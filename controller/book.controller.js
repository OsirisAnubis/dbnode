const db = require('../db');

class BookController {
  async createBook(req, res) {
    const { title, author, releasYear, numberOfPages, circulation } = req.body;
    const newBook = await db.query(
      `INSERT INTO books (title, author, releas_year, number_of_pages, circulation)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, author, releasYear, numberOfPages, circulation]
    );
    res.json(newBook.rows[0]);
  }
  async getBooks(req, res) {
    const books = await db.query('SELECT * FROM books');
    res.json(books.rows);
  }
  async getOneBook(req, res) {
    const id = req.params.id;
    const book = await db.query('SELECT * FROM books WHERE id = $1', [id]);
    res.json(book.rows[0]);
  }
  async updateBook(req, res) {
    const { id, title, author, releasYear, numberOfPages, circulation } =
      req.body;
    const book = await db.query(
      `UPDATE books SET
      title = $1, author = $2,
      releas_year = $3, number_of_pages = $4, circulation = $5
      WHERE id = $6 RETURNING *`,
      [title, author, releasYear, numberOfPages, circulation, id]
    );
    res.json(book.rows[0]);
  }
  async deleteBook(req, res) {
    const id = req.params.id;
    const book = await db.query('DELETE FROM books WHERE id = $1', [id]);
    res.sendStatus(200).end();
  }
}

module.exports = new BookController();
