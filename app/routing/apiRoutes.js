 var path = require("path");
 
 var friendsList = require("../data/friends.js");

 module.exports = function(app){

    
     console.log("hello blah blah");
     app.get("/api/friends", function(req, res){
         res.json(friendsList);
     });



     app.post("/api/friends", function(req, res) {
        
        if (friendsList.length < 5) {
          friendsList.push(req.body);
          res.json(true);
          console.log(friendsList);
        }else{
            res.json(false);
        }
        
      });
 }