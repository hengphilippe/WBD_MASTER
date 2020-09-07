var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {
    let param = req.url;
    switch (param) {
        case "/home":
            fs.readFile('./html/home.html', function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
            break;
        case "/about":
            fs.readFile('./html/about.html', function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
            break;
        case "/features":
            fs.readFile('./html/features.html', function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(param);
            return res.end();
    }

    // res.write(req.url);
    // res.end();
}).listen(8080);