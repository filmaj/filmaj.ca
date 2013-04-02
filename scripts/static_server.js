var http = require("http"),
    https = require("https"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8888,
    isHTTPS = process.argv[3] ? true : false;

var options = isHTTPS ? {
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem')
} : {};

function handler(request, response) {
  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);
  
  fs.exists(filename, function(exists) {
      console.log(filename, exists);
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

	if (fs.statSync(filename).isDirectory()) filename += 'index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}

var server;
if (isHTTPS) {
    server = https.createServer(options, handler);
} else {
    server = http.createServer(handler);
}
server.listen(parseInt(port, 10));

console.log("Static file server running at\n  => http" + (isHTTPS ? 's':'') + "://localhost:" + port + "/\nCTRL + C to shutdown");
