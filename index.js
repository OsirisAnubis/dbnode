const express = require('express');
const bookRouter = require('./routes/book.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', bookRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
