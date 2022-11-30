const http = require('http');
const fs = require('fs');
const url = require('url');

const serve = (name, req, res) => {
  fs.readFile(name, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
}

http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = '.' + q.pathname;
  if (filename === './') {
      serve('index.html', req, res);
  } else if (filename === './about.html' || filename === './contact-me.html') {
      serve(filename, req, res);
  } else {
      serve('404.html', req, res);
  }
}).listen(8080);