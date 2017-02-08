var mongoose = require('mongoose');
var offerItem = mongoose.model('Offer');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.offersList = function(req, res) {
    if (req.params) {
        offerItem.find(req.params)
            .exec(function(err, offer) {
                if (!offer) {
                    sendJsonResponse(res, 404, {
                        "message": "Offer Id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, offer);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No offer id in request"
        });
    }
};


module.exports.offersCreate = function(req, res) {
    offerItem.create({
        name: req.body.name,
        price: req.body.price,
        specialItems: req.body.specialItems.split(",")
    }, function(err, offer) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, offer);
        }
    });
};


module.exports.offersReadOne = function(req, res) {
    if (req.params && req.params.offerid) {
        offerItem.findById(req.params.offerid)
                .exec(function(err, offer) {
                    if (!offer) {
                        sendJsonResponse(res, 404, {
                            "message": "Offer Id not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 200, offer);
                });
        } else {
            sendJsonResponse(res, 404, {
                "message": "No offer id in request"
            });
        }
};


module.exports.offersUpdateOne = function(req, res) {
    if (!req.params.offerid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, offerid is required"
        });
        return;
    }
    offerItem.findById(req.params.offerid)
        .exec(
            function(err, offer) {
                if (!offer) {
                    sendJsonResponse(res, 404, {
                        "message": "offer id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                offer.name = req.body.name;
                offer.price = req.body.price;
                offer.specialItems = req.body.specialItems.split(",");
                offer.save(function(err, offer) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, offer);
                    }
                });
            }
        );
};


module.exports.offersDeleteOne = function(req, res) {
    var offerid = req.params.offerid;
    if (offerid) {
        offerItem.findByIdAndRemove(offerid)
            .exec(
                function(err, offer) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No offer id"
        });
    }
};