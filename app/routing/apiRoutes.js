
// access to friends.js
var friends = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function(request, response) {

        // var for best match object to display after submit
        var match = {
            fName: "",
            photo: "",
            scoreDif: 100
        };

        // request.body from user app.post
        var userData = request.body;
        // userScores from .body objects
        var userScores = userData.scores;

        // calculated difference between users
        var totalDifference = 0;

        // loop through all friends arrays
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            // loop through each friends score array
            for (var j = 0; j < friends[i].scores[j]; j++) {
                // scores must be absolute, so Math.abs()
                // difference of current user scores and all user scores
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // is the current user a better match than any existing
                if (totalDifference <= match.scoreDif) {
                    match.fName = friends[i].fName;
                    match.photo = friends[i].photo;
                    match.scoreDif = totalDifference;
                }
            }
        }
        // add results to friends.js
        friends.push(userData);
        // return results
        response.json(match);
    });

};

