require("./../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriends = req.body;

        console.log(newFriends);

        bff(newFriends);

        friends.push(newFriends);

        res.json(newFriends);
    });

    function bff(newF) {
        var score;
        var match = 50
        var matchIndex;

        for (var i = 0; i < friends.length; i++) {
            console.log("loop1")
            score = 0
            for (let s = 0; s < friends[i].scores.length; s++) {
                score += Math.abs(parseInt(friends[i].scores[s]) - parseInt(newF.scores[s]))
            }
            if (score < match) {
                match = score
                matchIndex = i
            }
        }
    }
    // return matchIndex;
}