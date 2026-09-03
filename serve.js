const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const file = path.join(__dirname, 'index.html');
  const content = fs.readFileSync(file, 'utf8');
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.end(content);
});

server.listen(8080, '127.0.0.1', () => {
  console.log('http://127.0.0.1:8080');
});
