var mongoose = require('mongoose'),
    roleItem = mongoose.model('Role');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.rolesList = function(req, res) {
    if (req.params) {
        roleItem.find(req.params)
            .exec(function(err, role) {
                if (!role) {
                    sendJsonResponse(res, 404, {
                        "message": "role id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, role);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No role id in request"
        });
    }
};


module.exports.rolesCreate = function(req, res) {
    roleItem.create({
        title: req.body.title,
        description: req.body.description
    }, function(err, role) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, role);
        }
    });
};


module.exports.rolesReadOne = function(req, res) {
    if (req.params && req.params.roleid) {
        roleItem.findById(req.params.roleid)
            .exec(function(err, role) {
                if (!role) {
                    sendJsonResponse(res, 404, {
                        "message": "role id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, role);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No role id in request"
        });
    }
};


module.exports.rolesUpdateOne = function(req, res) {
    if (!req.params.roleid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, role id is required"
        });
        return;
    }
    roleItem.findById(req.params.roleid)
        .exec(
            function(err, role) {
                if (!role) {
                    sendJsonResponse(res, 404, {
                        "message": "role id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                role.title = req.body.title;
                role.description = req.body.description;
                role.save(function(err, role) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, role);
                    }
                });
            }
        );
};


module.exports.rolesDeleteOne = function(req, res) {
    var roleid = req.params.roleid;
    if (roleid) {
        roleItem.findByIdAndRemove(roleid)
            .exec(
                function(err, role) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No role id"
        });
    }
};