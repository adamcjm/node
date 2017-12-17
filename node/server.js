var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content_Type': 'text/plain'});
    res.end('hello world');
})
server.listen(8888);
console.log('server is running @port:8888');
// 回调函数