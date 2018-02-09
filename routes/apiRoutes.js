// Routes
// =============================================================

var friends = require("../data/friends");

module.exports = function(app) {
  // Get all friends - provides JSON
  app.get("/api/:friends", function(req, res) {

    return res.json(friends);
  });

  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    //Compare score to see best match
    var scoreDiff=[];
    var scoreComp=[];
    
    var newFriend = req.body;
    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);

    for(var i=0; i<friends.length; i++ ){
      for(var j =0; j<10; j++){
        scoreDiff = [];
        scoreDiff.push(Math.abs(parseInt(friends[i].scores[j])-parseInt(newFriend["scores[]"][j])));
      }
      scoreComp.push(scoreDiff.reduce((a, b) => a + b, 0));
    }

    var n = scoreComp.indexOf(Math.min.apply(null, scoreComp));
    var matchName = friends[n].name;
    var matchPhoto = friends[n].photo;
    var match = {"name":matchName, "photo": matchPhoto};
    

    //Push Code to friends.js    
    friends.push(newFriend);
    //push the data to frontend
    res.json(match);


  });
};
