var mongoose = require('mongoose');
var serviceItem = mongoose.model('Service');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.servicesList = function(req, res) {
    if (req.params) {
        serviceItem.find(req.params)
            .exec(function(err, service) {
                if (!service) {
                    sendJsonResponse(res, 404, {
                        "message": "Service id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, service);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No service id in request"
        });
    }
};


module.exports.servicesCreate = function(req, res) {
    serviceItem.create({
        name: req.body.name,
        image: req.body.image,
        link: req.body.link,
        description: req.body.description
    }, function(err, offer) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, offer);
        }
    });
};


module.exports.servicesReadOne = function(req, res) {
    if (req.params && req.params.serviceid) {
        serviceItem.findById(req.params.serviceid)
                .exec(function(err, service) {
                    if (!service) {
                        sendJsonResponse(res, 404, {
                            "message": "Service id not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 200, service);
                });
        } else {
            sendJsonResponse(res, 404, {
                "message": "No service id in request"
            });
        }
};


module.exports.servicesUpdateOne = function(req, res) {
    if (!req.params.serviceid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, service id is required"
        });
        return;
    }
    serviceItem.findById(req.params.serviceid)
        .exec(
            function(err, service) {
                if (!service) {
                    sendJsonResponse(res, 404, {
                        "message": "service id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                service.name = req.body.name;
                service.image = req.body.image;
                service.link = req.body.link;
                service.description = req.body.description;
                service.save(function(err, service) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, service);
                    }
                });
            }
        );
};


module.exports.servicesDeleteOne = function(req, res) {
    var serviceid = req.params.serviceid;
    if (serviceid) {
        serviceItem.findByIdAndRemove(serviceid)
            .exec(
                function(err, service) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No service id"
        });
    }
};