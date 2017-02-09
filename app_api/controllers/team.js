var mongoose = require('mongoose');
var request = require('request');
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
                        "message": "Team id not found"
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
            "message": "No team id in request"
        });
    }
};

module.exports.teamsCreate = function(req, res) {
    teammem.create({
        name: req.body.name,
        image: req.body.image,
        link: req.body.link,
        position: req.body.position,
        description: req.body.description
    }, function(err, offer) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, offer);
        }
    });
};

module.exports.teamsReadOne = function(req, res) {
    if (req.params && req.params.teamid) {
        teammem.findById(req.params.teamid)
                .exec(function(err, team) {
                    if (!team) {
                        sendJsonResponse(res, 404, {
                            "message": "Team id not found"
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
                "message": "No team id in request"
            });
        }
};


module.exports.teamsUpdateOne = function(req, res) {
    if (!req.params.teamid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, team id is required"
        });
        return;
    }
    teammem.findById(req.params.teamid)
        .exec(
            function(err, team) {
                if (!team) {
                    sendJsonResponse(res, 404, {
                        "message": "team id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                team.name = req.body.name;
                team.image = req.body.image;
                team.link = req.body.link;
                team.position = req.body.position;
                team.description = req.body.description;
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
            "message": "No team id"
        });
    }
};