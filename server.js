const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  try {
    let rawUrl = req.url.split('?')[0];
    let decoded = decodeURIComponent(rawUrl);

    // If root or any variation of presentation.html or index.html
    if (decoded === '/' || decoded === '' || decoded.includes('presentation') || decoded.includes('index')) {
      const file = path.join(__dirname, 'presentation.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(file).pipe(res);
    }

    // Try normal file
    const safePath = path.normalize(decoded).replace(/^(\.\.[\/\\])+/, '');
    const fullPath = path.join(__dirname, safePath);

    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      return fs.createReadStream(fullPath).pipe(res);
    }

    // Fallback: If not found, serve presentation.html so user NEVER sees 404
    const fallback = path.join(__dirname, 'presentation.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(fallback).pipe(res);
  } catch (err) {
    console.error('Request error:', err);
    const fallback = path.join(__dirname, 'presentation.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(fallback).pipe(res);
  }
});

server.listen(8000, () => {
  console.log('Zero-404 Node Server running on http://localhost:8000');
});
