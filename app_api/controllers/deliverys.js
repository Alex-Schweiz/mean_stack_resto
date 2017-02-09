var mongoose = require('mongoose');
var deliveryItem = mongoose.model('Delivery');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.deliverysList = function(req, res) {
    if (req.params) {
        deliveryItem.find(req.params)
            .exec(function(err, delivery) {
                if (!delivery) {
                    sendJsonResponse(res, 404, {
                        "message": "delivery id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, delivery);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No delivery id in request"
        });
    }
};


module.exports.deliverysCreate = function(req, res) {
    deliveryItem.create({
        id_client: req.body.id_client,
        content: req.body.content,
        status: req.body.status,
        deliverer: req.body.deliverer,
        price: req.body.price,
        address: req.body.address,
        date: req.body.date
    }, function(err, delivery) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, delivery);
        }
    });
};


module.exports.deliverysReadOne = function(req, res) {
    if (req.params && req.params.deliveryid) {
        deliveryItem.findById(req.params.deliveryid)
            .exec(function(err, delivery) {
                if (!delivery) {
                    sendJsonResponse(res, 404, {
                        "message": "delivery id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, delivery);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No delivery id in request"
        });
    }
};


module.exports.deliverysUpdateOne = function(req, res) {
    if (!req.params.deliveryid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, delivery id is required"
        });
        return;
    }
    deliveryItem.findById(req.params.deliveryid)
        .exec(
            function(err, delivery) {
                if (!delivery) {
                    sendJsonResponse(res, 404, {
                        "message": "delivery id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                delivery.id_client = req.body.id_client;
                delivery.content = req.body.content;
                delivery.status = req.body.status;
                delivery.deliverer = req.body.deliverer;
                delivery.price = req.body.price;
                delivery.address = req.body.address;
                delivery.date = req.body.date;
                delivery.save(function(err, delivery) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, delivery);
                    }
                });
            }
        );
};


module.exports.deliverysDeleteOne = function(req, res) {
    var deliveryid = req.params.deliveryid;
    if (deliveryid) {
        deliveryItem.findByIdAndRemove(deliveryid)
            .exec(
                function(err, delivery) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No delivery id"
        });
    }
};