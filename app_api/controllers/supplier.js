var mongoose = require('mongoose'),
    supplierItem = mongoose.model('Supplier');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.suppliersList = function(req, res) {
    if (req.params) {
        supplierItem.find(req.params)
            .exec(function(err, supplier) {
                if (!supplier) {
                    sendJsonResponse(res, 404, {
                        "message": "supplier id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, supplier);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No supplier id in request"
        });
    }
};


module.exports.suppliersCreate = function(req, res) {
    supplierItem.create({
        name: req.body.name,
        description: req.body.description
    }, function(err, supplier) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, supplier);
        }
    });
};


module.exports.suppliersReadOne = function(req, res) {
    if (req.params && req.params.supplierid) {
        supplierItem.findById(req.params.supplierid)
            .exec(function(err, supplier) {
                if (!supplier) {
                    sendJsonResponse(res, 404, {
                        "message": "supplier id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, supplier);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No supplier id in request"
        });
    }
};


module.exports.suppliersUpdateOne = function(req, res) {
    if (!req.params.supplierid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, supplier id is required"
        });
        return;
    }
    supplierItem.findById(req.params.supplierid)
        .exec(
            function(err, supplier) {
                if (!supplier) {
                    sendJsonResponse(res, 404, {
                        "message": "supplier id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                supplier.name = req.body.name;
                supplier.description = req.body.description;
                supplier.save(function(err, supplier) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, supplier);
                    }
                });
            }
        );
};


module.exports.suppliersDeleteOne = function(req, res) {
    var supplierid = req.params.supplierid;
    if (supplierid) {
        supplierItem.findByIdAndRemove(supplierid)
            .exec(
                function(err, supplier) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No supplier id"
        });
    }
};