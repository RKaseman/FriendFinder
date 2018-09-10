
var express = require("express");
var bodyParser = require("body-parser");


var app = express();


var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);


// start the server
app.listen(PORT);
console.log("server at http://localhost:" + PORT);

