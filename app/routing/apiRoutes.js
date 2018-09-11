
// access to friends.js
var results = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        response.json(results);
    });

    app.post("/api/friends", function(request, response) {

        // var for best match object to display after submit
        // is match.scoreDif
        var match = {
            fName: "",
            photo: "",
            scoreDif: 100
        };

        console.log(request.body);

        // request.body from user app.post
        var userData = request.body;
        // userScores from .body objects
        var userScores = userData.scores;

        console.log(userScores);

        // calculated difference between users
        var totalDifference = 0;

        // loop through all friends arrays
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            totalDifference = 0;
            // loop through each results score array
            for (var j = 0; j < results[i].scores[j]; j++) {
                // scores must be absolute, so Math.abs()
                // difference of current user scores and all user scores
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(results[i].scores[j]));

                // is the current user a better match than any existing
                if (totalDifference <= match.scoreDif) {
                    match.fName = results[i].name;
                    match.photo = results[i].photo;
                    match.scoreDif = totalDifference;
                }
            }
        }
        results.push(userData);
        response.json(match);
    });

};

