var express = require('express');
var path = require("path");
var app = express();

//=================================

app.get("/survey", function(request, result) {
    result.sendFile(path.join(__dirname, '../public/survey.html'));
});

app.get("*", function(request, result) {
    result.sendFile(path.join(__dirname, '../public/home.html'));
});



app.listen(8080);
