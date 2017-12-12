var express = require('express');
var path = require("path");
var app = express();
var friendList = require("../app/data/friends.js");

//=================================

// module.exports()

app.get("/api/:friendList", function(request, result) {
    var chosen = request.params.friendList;
    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < friendList.length; i++) {
            if (chosen === friendList[i].routeName) {
                return result.json(friendList[i]);
            }
        }
        return result.json(false);
    }
    return result.json(friendList);
});

app.post("/api/friends", function(request, result) {
    result.json(friendList);

});

app.listen(8080);
