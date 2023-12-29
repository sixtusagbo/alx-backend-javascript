const express = require('express');
const indexRouter = require('./routes');

const app = express();
const port = 1245;

app.use('/', indexRouter);

app.listen(port, () => console.log(`Server running at ${port}`));

module.exports = app;
