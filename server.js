
var express = require("express");
var bodyParser = require("body-parser");


var app = express();


var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// start the server
app.listen(PORT, function() {
    console.log("server at http://localhost:" + PORT);
});

