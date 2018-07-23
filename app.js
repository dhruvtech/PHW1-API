// Dependencies
const http = require('http');
const url = require('url');

//Creating server
const server = http.createServer(function(req, res){

    let origin = url.parse(req.url, true);

    let path = origin.pathname;
    path = path.replace(/^\+|\/+$/g,'');

    let name = origin.query.name;

    if (path.toLowerCase() === '/hello') {
        let message = "Hello!";

        if (name != undefined){
            message = `Hi, ${name}! How are you?`;
        }
        res.setHeader('content-type', "application/json");
        res.writeHead(200);
        res.end(`{"message": "${message}"}`);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000);