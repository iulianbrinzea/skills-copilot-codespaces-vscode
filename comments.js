// Create web server
// Run in terminal: node comments.js
// Load in browser: http://localhost:3000

var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    if (request.url === '/') {
        fs.readFile('./comments.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    } else if (request.url === '/api/comments') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify([