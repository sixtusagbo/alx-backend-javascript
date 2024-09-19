const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    const dbName = process.argv[2];
    try {
      res.end(await countStudents(dbName));
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(port, hostname, () => console.log(`Server started at https://${hostname}:${port}`));

module.exports = app;
