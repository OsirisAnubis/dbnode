const Router = require('express');
const router = new Router();
const bookController = require('../controller/book.controller');

router.post('/book', bookController.createBook);
router.get('/books', bookController.getBooks);
router.get('/book/:id', bookController.getOneBook);
router.put('/book', bookController.updateBook);
router.delete('/book/:id', bookController.deleteBook);

module.exports = router;
