var mongoose = require('mongoose'),
    serviceItem = mongoose.model('Service');

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
        icon: req.body.icon,
        description: req.body.description,
        headText: req.body.headText,
        upperText: req.body.upperText,
        lowerText: req.body.lowerText
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
                service.icon = req.body.icon;
                service.description = req.body.description;
                service.headText = req.body.headText;
                service.upperText = req.body.upperText;
                service.lowerText = req.body.lowerText;
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