var mongoose = require('mongoose');
var teammem = mongoose.model('Team');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.teamsList = function(req, res) {
    if (req.params) {
        teammem.find(req.params)
            .exec(function(err, team) {
                if (!team) {
                    sendJsonResponse(res, 404, {
                        "message": "Team Id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, team);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No teamid in request"
        });
    }
};


module.exports.teamsCreate = function(req, res) {
    teammem.create({
        name: req.body.name,
        price: req.body.price,
        specialItems: req.body.specialItems.split(",")
    }, function(err, location) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, location);
        }
    });
};


module.exports.teamsReadOne = function(req, res) {
    if (req.params && req.params.teamid) {
        teammem.findById(req.params.teamid)
                .exec(function(err, team) {
                    if (!team) {
                        sendJsonResponse(res, 404, {
                            "message": "Team Id not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 200, team);
                });
        } else {
            sendJsonResponse(res, 404, {
                "message": "No teamid in request"
            });
        }
};


module.exports.teamsUpdateOne = function(req, res) {
    if (!req.params.teamid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, locationid is required"
        });
        return;
    }
    teammem.findById(req.params.teamid)
        .exec(
            function(err, team) {
                if (!team) {
                    sendJsonResponse(res, 404, {
                        "message": "teamid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                team.name = req.body.name;
                team.price = req.body.price;
                team.specialItems = req.body.specialItems.split(",");
                team.save(function(err, team) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, team);
                    }
                });
            }
        );
};


module.exports.teamsDeleteOne = function(req, res) {
    var teamid = req.params.teamid;
    if (teamid) {
        teammem.findByIdAndRemove(teamid)
            .exec(
                function(err, team) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No locationid"
        });
    }
};