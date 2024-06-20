const app = require('http').createServer();

const hostname = 'localhost';
const port = 1245;

app.on('request', (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname);

module.exports = app;
