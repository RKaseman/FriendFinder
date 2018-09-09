
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// var router = express.Router();


// router.get("/", function (request, response) {
//     response.json({ message: "successful test" });
// });


// ##############################################
// http://localhost:8080/api/users?id=4&token=sdfa3&geo=us&test=yes
app.get("/api/users", function (request, response) {
    var user_id = request.query.id;
    var token = request.query.token;
    var geo = request.query.geo;
    var test = request.query.test;

    response.send(user_id + " " + token + " " + geo + " " + test);
});


// http://localhost:8080/api/1
app.get('/api/:version', function (request, response) {
    response.send(request.params.version);
});


// start the server
app.listen(PORT);
console.log("Server started! At http://localhost:" + PORT);
// ##############################################

// Dependencies
// var http = require("http");
// var fs = require("fs");

// Set our port to 8080
// var PORT = 8080;

// Create our server
// var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {

    // Here we use the fs package to read our index.html file
    // fs.readFile(__dirname + "/index.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(data);
    // });
// }

// Starts our server
// server.listen(PORT, function () {
    // console.log("Server is listening on PORT: " + PORT);
// });

