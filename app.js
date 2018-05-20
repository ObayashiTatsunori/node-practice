const http = require("http");
const fs = require("fs");

var server = http.createServer(
    (request,response)=>{
        fs.readFile('./index.html','UTF-8',
        (error,data)=>{
            var content=data.
                replace(/dummy_title/g, 'タイトルです').
                replace(/dummy_content/g, 'これがコンテンツです。');
           response.writeHead(200,{'Content-Type': 'text/html'});
           response.write(content);
           response.end();
        });
    }
    );
server.listen(8080);
console.log('Server start!');