const http = require('http');
const fs = require('fs');
const file = "./www/index.html"; //landing page

http.createServer((request, response)=>{
  fs.readFile(file, (err, data)=>{
    if(err){
      response.writeHead(500, {"Content-Type":"text/plain"});
      response.write("500 Internal Server Error");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type":"text/html"});
      response.write(data);
      response.end();
    }
  })
}).listen(8888); //port 8888

