
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");

// ?

// access:
// friends.surveyData
var friends = require("./app/data/friends");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Y
var router = express.Router();



// Y
// middleware for all requests
router.use(function (request, response, next) {
    // cmd window log
    console.log("message from router.use(function() {} )");
    next();
    // ...route(s): router.get
});

// http://localhost:8080/api
router.get("/", function (request, response) {
    response.json({ message: "message from router.get('/', function() {} )" });
});


// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });

    });


// Y
// router.get("/", function (request, response) {
//     response.json({ message: "successful test" });
// });
// ^

app.use("/api", router);

// Y
// http://localhost:8080/api/users?id=4&token=sdfa3&geo=us&test=yes
app.get("/api/users", function (request, response) {
    var user_id = request.query.id;
    var token = request.query.token;
    var geo = request.query.geo;
    var test = request.query.test;

    response.send(user_id + " " + token + " " + geo + " " + test);
});

// http://localhost:8080/api/1
app.get("/api/:version", function (request, response) {
    response.send(request.params.version);
});


// Y
// parameter middleware that will run before the next routes
app.param("name", function (request, response, next, name) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + "-dude";

    // save name to the request
    request.name = modified;

    next();
});
// http://localhost:8080/api/users/chris
app.get("/api/users/:name", function (request, response) {
    // the user was found and is available in req.user
    response.send("What is up " + request.name + "!");
});

// Y
// POST http://localhost:8080/api/users
// parameters sent with 
app.post("/api/users", function (request, response) {
    var user_id = request.body.id;
    var token = request.body.token;
    var geo = request.body.geo;

    response.send(user_id + " " + token + " " + geo);
});


// Y


// start the server
app.listen(PORT);
console.log("Server started! At http://localhost:" + PORT);
// ##############################################
// 01-
// Require/import the HTTP module
// var http = require("http");

// Define a port to listen for incoming requests
// var PORT = 8080;

// Create a generic function to handle requests and responses
// function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    // response.end("It Works!! Path Hit: " + request.url);
// }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
// server.listen(PORT, function () {

    // Log (server-side) when our server has started
    // console.log("Server listening on: http://localhost:" + PORT);
// });
// ##############################################
// 04-

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

