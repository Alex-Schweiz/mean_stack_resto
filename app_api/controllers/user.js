var mongoose = require('mongoose');
var userItem = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.usersList = function(req, res) {
    if (req.params) {
        userItem.find(req.params)
            .exec(function(err, user) {
                if (!user) {
                    sendJsonResponse(res, 404, {
                        "message": "user id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, user);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No user id in request"
        });
    }
};


module.exports.usersCreate = function(req, res) {
    userItem.create({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        username: req.body.username,
        phone: req.body.phone,
        role: req.body.role,
        birthdate: req.body.birthdate
    }, function(err, user) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, user);
        }
    });
};


module.exports.usersReadOne = function(req, res) {
    if (req.params && req.params.userid) {
        userItem.findById(req.params.userid)
            .exec(function(err, user) {
                if (!user) {
                    sendJsonResponse(res, 404, {
                        "message": "user id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, user);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No user id in request"
        });
    }
};


module.exports.usersUpdateOne = function(req, res) {
    if (!req.params.userid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, user id is required"
        });
        return;
    }
    userItem.findById(req.params.userid)
        .exec(
            function(err, user) {
                if (!user) {
                    sendJsonResponse(res, 404, {
                        "message": "user id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                user.name = req.body.name;
                user.email = req.body.email;
                user.photo = req.body.photo;
                user.username = req.body.username;
                user.phone = req.body.phone;
                user.role = req.body.role;
                user.birthdate = req.body.birthdate;
                user.save(function(err, user) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, user);
                    }
                });
            }
        );
};


module.exports.usersDeleteOne = function(req, res) {
    var userid = req.params.userid;
    if (userid) {
        userItem.findByIdAndRemove(userid)
            .exec(
                function(err, user) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No user id"
        });
    }
};