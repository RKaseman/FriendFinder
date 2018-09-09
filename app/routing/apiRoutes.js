app.get("/api/friends", function(request, response) {
    return response.json(friends);
});

app.post("/api/friends", function(request, response) {
    var newSurvey = request.body;
});

