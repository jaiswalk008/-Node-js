const http = require('http');
const route = require('./routes');

//cant change routes file from here
console.log(route.someText);
const server  = http.createServer(route.handler);
server.listen(4000);

