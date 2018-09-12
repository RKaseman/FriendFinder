
var path = require("path");


// html serve
module.exports = function(app) {
    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("*", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

