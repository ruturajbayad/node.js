//in this program we are going to make basic server by using http module
const http = require('http');

//using createServer function we can create server
http.createServer((req,rsp) => {
    rsp.write("<h1>New server started</h1>");
    rsp.end();
}).listen(4000);

//how to open http server in browser :- localhost:4000