var mongoose = require('mongoose');
var clientItem = mongoose.model('Client');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.clientsList = function(req, res) {
    if (req.params) {
        clientItem.find(req.params)
            .exec(function(err, client) {
                if (!client) {
                    sendJsonResponse(res, 404, {
                        "message": "client id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, client);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No client id in request"
        });
    }
};


module.exports.clientsCreate = function(req, res) {
    clientItem.create({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        username: req.body.username,
        phone: req.body.phone,
        address: req.body.address,
        birthdate: req.body.birthdate
    }, function(err, client) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, client);
        }
    });
};


module.exports.clientsReadOne = function(req, res) {
    if (req.params && req.params.clientid) {
        clientItem.findById(req.params.clientid)
            .exec(function(err, client) {
                if (!client) {
                    sendJsonResponse(res, 404, {
                        "message": "client id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, client);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No client id in request"
        });
    }
};


module.exports.clientsUpdateOne = function(req, res) {
    if (!req.params.clientid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, client id is required"
        });
        return;
    }
    clientItem.findById(req.params.clientid)
        .exec(
            function(err, client) {
                if (!client) {
                    sendJsonResponse(res, 404, {
                        "message": "client id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                client.name = req.body.name;
                client.email = req.body.email;
                client.photo = req.body.photo;
                client.username = req.body.username;
                client.phone = req.body.phone;
                client.address = req.body.address;
                client.birthdate = req.body.birthdate;
                client.save(function(err, client) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, client);
                    }
                });
            }
        );
};


module.exports.clientsDeleteOne = function(req, res) {
    var clientid = req.params.clientid;
    if (clientid) {
        clientItem.findByIdAndRemove(clientid)
            .exec(
                function(err, client) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No client id"
        });
    }
};