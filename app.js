var http = require("http");
var publicIp = require('public-ip');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});


  publicIp.v4(function (err, ip) {
      console.log(ip);
      response.write("ip: " + ip);
      response.end();
      //=> '46.5.21.123'
  });


}).listen(8888);
