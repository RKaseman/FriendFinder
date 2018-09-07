app.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "home.html"));
});

