// Create web server

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_path = url.parse(request.url).pathname;
  if (url_path == '/comments') {
    var data = fs.readFileSync('comments.json');
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(data);
  } else {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fs.readFileSync('index.html'));
  }
});

// Listen on port 8000, IP defaults to