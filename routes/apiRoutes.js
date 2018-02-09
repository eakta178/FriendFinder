// Routes
// =============================================================

var friends = require("../data/friends");

module.exports = function(app) {
  // Get all friends - provides JSON
  app.get("/api/:friends?", function(req, res) {

    return res.json(friends);
  });

  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    //Push Code to friends.js
    //Compare score to see best match
    var scoreDiff=[];
    var score;
    var scoreComp=[];
    
    var newFriend = req.body;
    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);

    
    for(var i=0; i<friends.length; i++ ){
      for(var j =0; j<=10; j++){
        scoreDiff[j].push(Math.abs(friends[i].scores[j]-newFriend.scores[j]));
        score += scoreDiff[j];
        scoreComp[j].push(score);
      }
      
    }
  
    var index = indexOf(Math.min(scoreComp))
    var matchName = friends[n].name;
    var matchPhoto = friends[n].photo;


    friends.push(newFriend);
    res.json(newFriend);


  });
};
