
var express = require("express");
var bodyParser = require("body-parser");


// instance of express app
var app = express();


// variable port selection
var PORT = process.env.PORT || 8080;


// access to js/css
app.use(express.static("/app/public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// start the server
app.listen(PORT, function() {
    console.log("server at http://localhost:" + PORT);
});

