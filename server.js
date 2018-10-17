var http = require("http");
var fs = require("fs");
var path = require("path")

var PORT = 8085;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {

        case "/":
            return home(res);
        case "/survey":
            return survey(res)
        default:
            return home(res);
    }
}

server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});

function survey(res) {
    fs.readFile(__dirname + "/public/survey.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}
function home(res) {
    fs.readFile(__dirname + "/public/home.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}